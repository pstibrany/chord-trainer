const CHORD_DATA = {
    maj7: {
        C: ['C', 'E', 'G', 'B'],
        D: ['D', 'F♯', 'A', 'C♯'],
        E: ['E', 'G♯', 'B', 'D♯'],
        F: ['F', 'A', 'C', 'E'],
        G: ['G', 'B', 'D', 'F♯'],
        A: ['A', 'C♯', 'E', 'G♯'],
        B: ['B', 'D♯', 'F♯', 'A♯'],
        'D♭': ['D♭', 'F', 'A♭', 'C'],
        'E♭': ['E♭', 'G', 'B♭', 'D'],
        'G♭': ['G♭', 'B♭', 'D♭', 'F'],
        'A♭': ['A♭', 'C', 'E♭', 'G'],
        'B♭': ['B♭', 'D', 'F', 'A']
    },
    min7: {
        C: ['C', 'E♭', 'G', 'B♭'],
        D: ['D', 'F', 'A', 'C'],
        E: ['E', 'G', 'B', 'D'],
        F: ['F', 'A♭', 'C', 'E♭'],
        G: ['G', 'B♭', 'D', 'F'],
        A: ['A', 'C', 'E', 'G'],
        B: ['B', 'D', 'F♯', 'A'],
        'C♯': ['C♯', 'E', 'G♯', 'B'],
        'F♯': ['F♯', 'A', 'C♯', 'E'],
        'G♯': ['G♯', 'B', 'D♯', 'F♯'],
        'E♭': ['E♭', 'G♭', 'B♭', 'D♭'],
        'B♭': ['B♭', 'D♭', 'F', 'A♭']
    },
    dom7: {
        C: ['C', 'E', 'G', 'B♭'],
        D: ['D', 'F♯', 'A', 'C'],
        E: ['E', 'G♯', 'B', 'D'],
        F: ['F', 'A', 'C', 'E♭'],
        G: ['G', 'B', 'D', 'F'],
        A: ['A', 'C♯', 'E', 'G'],
        B: ['B', 'D♯', 'F♯', 'A'],
        'D♭': ['D♭', 'F', 'A♭', 'C♭'],
        'E♭': ['E♭', 'G', 'B♭', 'D♭'],
        'G♭': ['G♭', 'B♭', 'D♭', 'F♭'],
        'A♭': ['A♭', 'C', 'E♭', 'G♭'],
        'B♭': ['B♭', 'D', 'F', 'A♭']
    },
    halfDim7: {
        C: ['C', 'E♭', 'G♭', 'B♭'],
        D: ['D', 'F', 'A♭', 'C'],
        E: ['E', 'G', 'B♭', 'D'],
        F: ['F', 'A♭', 'C♭', 'E♭'],
        G: ['G', 'B♭', 'D♭', 'F'],
        A: ['A', 'C', 'E♭', 'G'],
        B: ['B', 'D', 'F', 'A'],
        'C♯': ['C♯', 'E', 'G', 'B'],
        'D♯': ['D♯', 'F♯', 'A', 'C♯'],
        'F♯': ['F♯', 'A', 'C', 'E'],
        'G♯': ['G♯', 'B', 'D', 'F♯'],
        'A♯': ['A♯', 'C♯', 'E', 'G♯'],
        'B♭': ['B♭', 'D♭', 'F♭', 'A♭']
    },
    dim7: {
        C: ['C', 'E♭', 'G♭', 'B♭♭'],
        D: ['D', 'F', 'A♭', 'C♭'],
        E: ['E', 'G', 'B♭', 'D♭'],
        F: ['F', 'A♭', 'C♭', 'E♭♭'],
        G: ['G', 'B♭', 'D♭', 'F♭'],
        A: ['A', 'C', 'E♭', 'G♭'],
        B: ['B', 'D', 'F', 'A♭'],
        'C♯': ['C♯', 'E', 'G', 'B♭'],
        'D♯': ['D♯', 'F♯', 'A', 'C'],
        'E♭': ['E♭', 'G♭', 'B♭♭', 'D♭♭'],
        'F♯': ['F♯', 'A', 'C', 'E♭'],
        'G♯': ['G♯', 'B', 'D', 'F'],
        'A♭': ['A♭', 'C♭', 'E♭♭', 'G♭♭'],
        'B♭': ['B♭', 'D♭', 'F♭', 'A♭♭']
    },
    minMaj7: {
        C: ['C', 'E♭', 'G', 'B'],
        D: ['D', 'F', 'A', 'C♯'],
        E: ['E', 'G', 'B', 'D♯'],
        F: ['F', 'A♭', 'C', 'E'],
        G: ['G', 'B♭', 'D', 'F♯'],
        A: ['A', 'C', 'E', 'G♯'],
        B: ['B', 'D', 'F♯', 'A♯'],
        'C♯': ['C♯', 'E', 'G♯', 'B♯'],
        'D♭': ['D♭', 'F♭', 'A♭', 'C'],
        'E♭': ['E♭', 'G♭', 'B♭', 'D'],
        'F♯': ['F♯', 'A', 'C♯', 'E♯'],
        'G♯': ['G♯', 'B', 'D♯', 'F♯♯'],
        'A♭': ['A♭', 'C♭', 'E♭', 'G'],
        'B♭': ['B♭', 'D♭', 'F', 'A']
    }
};

const ALL_NOTES = [
    'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 
    'E', 'F', 'F♯', 'G♭', 'G', 'G♯', 
    'A♭', 'A', 'A♯', 'B♭', 'B', 'C♭', 'F♭'
];

const CHORD_TYPE_NAMES = {
    maj7: 'maj7',
    min7: 'min7',
    dom7: '7',
    halfDim7: 'min7♭5',
    dim7: 'dim7',
    minMaj7: 'min(maj7)'
};

function getRandomChord(selectedTypes = null) {
    // Use all chord types if none specified
    const availableTypes = selectedTypes || Object.keys(CHORD_DATA);
    
    // Filter to only include selected types that exist in CHORD_DATA
    const validTypes = availableTypes.filter(type => CHORD_DATA[type]);
    
    if (validTypes.length === 0) {
        // Fallback to all types if no valid types
        validTypes.push(...Object.keys(CHORD_DATA));
    }
    
    const randomType = validTypes[Math.floor(Math.random() * validTypes.length)];
    const roots = Object.keys(CHORD_DATA[randomType]);
    const randomRoot = roots[Math.floor(Math.random() * roots.length)];
    
    return {
        root: randomRoot,
        type: randomType,
        typeName: CHORD_TYPE_NAMES[randomType],
        notes: CHORD_DATA[randomType][randomRoot],
        displayName: `${randomRoot}${CHORD_TYPE_NAMES[randomType]}`
    };
}

function normalizeNote(note) {
    const enharmonicEquivalents = {
        'C♯': 'D♭',
        'D♭': 'C♯',
        'D♯': 'E♭',
        'E♭': 'D♯',
        'F♯': 'G♭',
        'G♭': 'F♯',
        'G♯': 'A♭',
        'A♭': 'G♯',
        'A♯': 'B♭',
        'B♭': 'A♯',
        'C♭': 'B',
        'B': 'C♭',
        'F♭': 'E',
        'E': 'F♭'
    };
    
    return [note, enharmonicEquivalents[note]].filter(Boolean);
}

function areNotesEqual(note1, note2) {
    const norm1 = normalizeNote(note1);
    const norm2 = normalizeNote(note2);
    return norm1.some(n1 => norm2.includes(n1));
}

function checkAnswer(selectedNotes, correctNotes) {
    if (selectedNotes.length !== correctNotes.length) {
        return false;
    }
    
    const correctSet = new Set();
    correctNotes.forEach(note => {
        normalizeNote(note).forEach(n => correctSet.add(n));
    });
    
    for (const selected of selectedNotes) {
        let found = false;
        for (const normalized of normalizeNote(selected)) {
            if (correctSet.has(normalized)) {
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    
    return true;
}