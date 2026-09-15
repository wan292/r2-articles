// The full flashcard deck lives here. Append new objects to this array
// following the same shape — see README.md for the format and a reusable
// prompt for turning an article into properly formatted cards.

const CARDS = [
  {
    id: "diag-anb",
    front: "What does the ANB angle measure, and how is it formed?",
    back: "The anteroposterior relationship between the maxilla and mandible — the angle formed at point A, Nasion, and point B on a lateral cephalogram.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["cephalometrics"],
    source: "Starter deck"
  },
  {
    id: "diag-sna",
    front: "What does the SNA angle assess?",
    back: "The anteroposterior position of the maxilla relative to the anterior cranial base (Sella–Nasion–point A).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["cephalometrics"],
    source: "Starter deck"
  },
  {
    id: "diag-overjet",
    front: "Define overjet.",
    back: "The horizontal distance between the labial surface of the mandibular central incisor and the incisal edge of the maxillary central incisor.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["occlusion"],
    source: "Starter deck"
  },
  {
    id: "diag-overbite",
    front: "Define overbite.",
    back: "The vertical overlap of the maxillary central incisors over the mandibular central incisors, usually expressed in millimeters or as a percentage of crown height.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["occlusion"],
    source: "Starter deck"
  },
  {
    id: "class-2",
    front: "What defines an Angle Class II molar relationship?",
    back: "The mesiobuccal cusp of the maxillary first molar occludes mesial to (ahead of) the buccal groove of the mandibular first molar — a distal relationship.",
    topic: "Classification",
    tags: ["angle classification"],
    source: "Starter deck"
  },
  {
    id: "class-3",
    front: "What defines an Angle Class III molar relationship?",
    back: "The mesiobuccal cusp of the maxillary first molar occludes distal to the buccal groove of the mandibular first molar — a mesial relationship.",
    topic: "Classification",
    tags: ["angle classification"],
    source: "Starter deck"
  },
  {
    id: "growth-mandible",
    front: "Where is the primary postnatal growth site of the mandible?",
    back: "The condylar cartilage, a secondary cartilage at the mandibular condyle, which grows mainly through endochondral ossification.",
    topic: "Growth & Development",
    tags: ["craniofacial growth"],
    source: "Starter deck"
  },
  {
    id: "growth-suture",
    front: "How does the maxilla grow, in contrast to the mandible?",
    back: "Primarily by sutural growth at the circummaxillary sutures plus surface remodeling — it has no comparable growth cartilage.",
    topic: "Growth & Development",
    tags: ["craniofacial growth"],
    source: "Starter deck"
  },
  {
    id: "bio-tad",
    front: "What is a TAD, and what's its main clinical advantage?",
    back: "A Temporary Anchorage Device (mini-screw or plate) that provides skeletal anchorage, allowing tooth movement without relying on other teeth for resistance.",
    topic: "Biomechanics & Appliances",
    tags: ["anchorage"],
    source: "Starter deck"
  },
  {
    id: "bio-aligners",
    front: "Mechanically, what's the core principle behind clear aligner therapy?",
    back: "A series of incremental, staged appliances that each deliver light, distributed force toward a slightly different tooth position — predictable movement built from many small steps rather than one continuously activated wire.",
    topic: "Biomechanics & Appliances",
    tags: ["aligners", "invisalign"],
    source: "Starter deck"
  }
];
