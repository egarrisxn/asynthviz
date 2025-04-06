import ThemeToggle from "@/components/theme-toggle";
import SynthPlayer from "@/components/synth-player";

export default function SynthesizerPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <nav className="fixed top-0 z-10 flex w-full flex-row items-center justify-between p-4 text-2xl leading-tight font-black tracking-tighter">
        asynthviz
        <ThemeToggle />
      </nav>
      <SynthPlayer />
    </main>
  );
}
