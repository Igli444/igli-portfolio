"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import NetworkBackground from "./NetworkBackground";
import { PROFILE } from "../lib/data";

const EMAIL = PROFILE.email;
const TIMES = ["09:00", "11:00", "13:00", "15:00", "17:00"];

function buildDays(count: number) {
  const days: { label: string; weekday: string; date: string; month: string; iso: string }[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    const dow = cursor.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push({
        label: cursor.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }),
        weekday: cursor.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
        date: String(cursor.getDate()),
        month: cursor.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
        iso: cursor.toISOString().slice(0, 10),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function BookingCalendar() {
  const [days, setDays] = useState<ReturnType<typeof buildDays>>([]);
  useEffect(() => {
    // buildDays() reads the current date, which must stay client-only —
    // reading it at module/render time breaks Next.js's static prerender.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(buildDays(8));
  }, []);
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  const ready = dayIdx !== null && time !== null;
  const chosenDay = dayIdx !== null ? days[dayIdx] : null;

  const mailtoHref = useMemo(() => {
    if (!chosenDay || !time) return undefined;
    const subject = `Meeting request — ${chosenDay.label} at ${time} (Tirana time)`;
    const body = [
      `Hi Igli,`,
      ``,
      `I'd like to book 15 minutes on ${chosenDay.label} at ${time}, Tirana time.`,
      ``,
      `Name: ${name || "—"}`,
      `What this is about: ${topic || "—"}`,
      ``,
      `Thanks!`,
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [chosenDay, time, name, topic]);

  return (
    <div className="ring-glow relative overflow-hidden rounded-3xl border border-border bg-surface p-6 text-left sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <NetworkBackground />
      </div>
      <div className="relative">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">For founders &amp; teams</p>
      <h3 className="font-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
        Book 15 minutes.
      </h3>
      <p className="mt-2 text-muted">Bring one problem. Leave with what I&apos;d do first.</p>

      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-soft">Pick a day</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {days.map((d, i) => {
            const active = i === dayIdx;
            return (
              <motion.button
                key={d.iso}
                type="button"
                onClick={() => setDayIdx(i)}
                whileTap={{ scale: 0.96 }}
                className={`flex w-[76px] flex-none flex-col items-center gap-1 rounded-xl border px-2 py-3 transition-colors ${
                  active
                    ? "border-accent bg-accent-soft text-foreground"
                    : "border-border bg-background/40 text-muted hover:border-accent/40"
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest">{d.weekday}</span>
                <span className="font-display text-xl font-medium">{d.date}</span>
                <span className="font-mono text-[10px] text-muted-soft">{d.month}</span>
                <span className="mt-0.5 rounded-full bg-border/60 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-muted-soft">
                  TIRANA
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {dayIdx !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-soft">
                Pick a time <span className="text-muted-soft/70">· Tirana time</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TIMES.map((t) => {
                  const active = t === time;
                  return (
                    <motion.button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      whileTap={{ scale: 0.96 }}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        active
                          ? "border-accent bg-accent-soft text-foreground"
                          : "border-border text-muted hover:border-accent/40"
                      }`}
                    >
                      {t}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-soft">
                  Your name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-soft">
                  What&apos;s this about
                </span>
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Project, role, or link"
                  className="mt-2 w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none"
                />
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <motion.a
          href={ready ? mailtoHref : undefined}
          aria-disabled={!ready}
          whileHover={ready ? { scale: 1.02 } : undefined}
          whileTap={ready ? { scale: 0.98 } : undefined}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-opacity ${
            ready
              ? "bg-foreground text-background hover:opacity-90"
              : "cursor-not-allowed bg-foreground/30 text-background/60"
          }`}
        >
          Request this time →
        </motion.a>
        <p className="text-xs text-muted-soft">
          Opens an email to me with your name, topic and the time. I confirm by email.
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">
        Or write directly to{" "}
        <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-accent">
          {EMAIL}
        </a>
        .
      </p>
      </div>
    </div>
  );
}
