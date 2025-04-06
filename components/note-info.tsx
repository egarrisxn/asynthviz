import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

function getNoteFrequency(note: string): string {
  const A4 = 440;
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const octave = Number.parseInt(note.slice(-1));
  const noteIndex = notes.indexOf(note.slice(0, -1));
  const N = noteIndex - 9 + (octave - 4) * 12;
  const freq = A4 * Math.pow(2, N / 12);
  return freq.toFixed(1);
}

interface NoteInfoProps {
  activeNotes: string[];
}

export function NoteInfo({ activeNotes }: NoteInfoProps) {
  const notes = Array.isArray(activeNotes) ? activeNotes : [];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm">Active Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[80px] w-full">
          <div className="flex flex-wrap gap-1">
            {notes.length === 0 ? (
              <p className="text-muted-foreground text-sm">No notes playing...</p>
            ) : (
              notes.map((note) => (
                <div key={note} className="flex flex-none items-center justify-center px-2 py-1">
                  <span className="text-xs">{note}</span>
                  <span className="text-muted-foreground ml-1 text-[10px]">
                    {getNoteFrequency(note)}Hz
                  </span>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
