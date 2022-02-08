// // create a synth and connect it to the main output (your speakers)
// const synth2 = new Tone.PolySynth().toDestination();

// let keypressed = false;

// const space = (event) => {
//   if (event.key === "q" && !keypressed) {
//     event.preventDefault();
//     synth2.triggerAttackRelease("C4", 1);
//     keypressed = true;
//   }
//   if (event.key === "s" && !keypressed) {
//     event.preventDefault();
//     synth2.triggerAttack("D4");
//     keypressed = true;
//   }
//   if (event.key === "d" && !keypressed) {
//     event.preventDefault();
//     synth2.triggerAttack("E4");
//     keypressed = true;
//   }
//   console.log("pressed");
// };

// const space2 = (event) => {
//   if (event.key === "q" && keypressed) {
//     // synth2.triggerRelease("C4");
//     keypressed = false;
//   }
//   if (event.key === "s" && keypressed) {
//     synth2.triggerRelease("D4");
//     keypressed = false;
//   }
//   if (event.key === "d" && keypressed) {
//     synth2.triggerRelease("E4");
//     keypressed = false;
//   }
// };

// const spacebar = document.body.addEventListener("keydown", space);
// const end = document.body.addEventListener("keyup", space2);

let octave = 4;

const keys = [];
let prevKey = 0;

const Instruments = {
  // https://github.com/stuartmemo/qwerty-hancock
  keyboard: {
    // Lower octave.
    q: "Cl",
    z: "C#l",
    s: "Dl",
    e: "D#l",
    d: "El",
    f: "Fl",
    t: "F#l",
    g: "Gl",
    y: "G#l",
    h: "Al",
    u: "A#l",
    j: "Bl",
    // Upper octave.
    k: "Cu",
    o: "C#u",
    l: "Du",
    p: "D#u",
    m: "Eu",
    ù: "Fu",
    $: "F#u",
    µ: "Gu",
  },
};

let instrument = Instruments.keyboard;

const keyToNote = (key) => {
  const note = instrument[key];
  if (!note) {
    return;
  }

  return Tone.Frequency(
    note.replace("l", octave).replace("u", octave + 1)
  ).toNote();
};

const onKeyDown = (() => {
  let listener;

  return (synth) => {
    document.removeEventListener("keydown", listener);

    listener = (event) => {
      const { key } = event;

      // Only trigger once per keydown event.
      if (!keys[key]) {
        keys[key] = true;

        const note = keyToNote(key);
        if (note) {
          synth.triggerAttack(note);
          prevKey = key;
        }
      }
    };

    document.addEventListener("keydown", listener);
  };
})();

const onKeyUp = (() => {
  let listener;
  let prev;

  return (synth) => {
    // Clean-up.
    if (prev) {
      prev.triggerRelease();
    }

    document.removeEventListener("keyup", listener);

    prev = synth;
    listener = (event) => {
      const { key } = event;
      if (keys[key]) {
        keys[key] = false;

        const note = keyToNote(key);
        if (synth instanceof Tone.PolySynth) {
          synth.triggerRelease(note);
        } else if (note && key === prevKey) {
          // Trigger release if this is the previous note played.
          synth.triggerRelease();
        }
      }
    };

    document.addEventListener("keyup", listener);
  };
})();

// Octave controls.
document.addEventListener("keydown", (event) => {
  // Decrease octave range (min: 0).
  if (event.key === "w") {
    octave = Math.max(octave - 1, 0);
  }
  // Increase octave range (max: 10).
  if (event.key === "x") {
    octave = Math.min(octave + 1, 9);
  }
});

// Init.
(() => {
  const synth = new Tone.PolySynth().toDestination();

  onKeyDown(synth);
  onKeyUp(synth);
})();
