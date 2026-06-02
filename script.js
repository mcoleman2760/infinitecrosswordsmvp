const SIZE = 15;
const crosswordEl = document.getElementById("crossword");
const acrossCluesEl = document.getElementById("acrossClues");
const downCluesEl = document.getElementById("downClues");
const puzzleSelect = document.getElementById("puzzleSelect");
const puzzleTitle = document.getElementById("puzzleTitle");
const themeDescription = document.getElementById("themeDescription");
const aiTopicInput = document.getElementById("aiTopic");
const difficultySelect = document.getElementById("difficulty");
const aiStatus = document.getElementById("aiStatus");
const aiGenerateBtn = document.getElementById("aiGenerateBtn");


const puzzleBanks = [
  {
    id: "civil-rights",
    title: "Civil Rights Leaders",
    description: "Leaders, organizers, and legal victories connected to the Civil Rights Movement.",
    words: [
      { word: "KING", clue: "Dr. Martin Luther ___ Jr., leader known for nonviolent protest" },
      { word: "ROSA", clue: "First name of the Montgomery bus boycott icon" },
      { word: "PARKS", clue: "Last name of Rosa, who refused to give up her bus seat" },
      { word: "MALCOLM", clue: "First name of civil rights leader with the last name X" },
      { word: "SELMA", clue: "Alabama city tied to voting rights marches" },
      { word: "SNCC", clue: "Student Nonviolent Coordinating Committee abbreviation" },
      { word: "NAACP", clue: "Civil rights organization founded in 1909" },
      { word: "SITINS", clue: "Lunch counter protests used to challenge segregation" },
      { word: "BOYCOTT", clue: "Organized refusal to buy or use services as protest" },
      { word: "FREEDOM", clue: "___ Riders challenged segregated interstate travel" },
      { word: "MARSHALL", clue: "Thurgood ___ argued Brown v. Board and joined the Supreme Court" },
      { word: "VOTING", clue: "The 1965 ___ Rights Act protected ballot access" },
      { word: "DREAM", clue: "Famous King speech: I Have a ___" },
      { word: "EQUALITY", clue: "Equal rights and treatment under the law" },
      { word: "JUSTICE", clue: "Fair treatment and accountability" }
    ]
  },
  {
    id: "black-excellence",
    title: "Black Excellence",
    description: "Inventors, artists, athletes, scholars, and barrier breakers.",
    words: [
      { word: "TUBMAN", clue: "Harriet ___ helped people escape slavery through the Underground Railroad" },
      { word: "DOUGLASS", clue: "Frederick ___ was an abolitionist, writer, and speaker" },
      { word: "GARVEY", clue: "Marcus ___ led a major Pan-African movement" },
      { word: "MAYA", clue: "First name of poet and author Angelou" },
      { word: "ANGELOU", clue: "Author of I Know Why the Caged Bird Sings" },
      { word: "JACKIE", clue: "First name of Robinson, who integrated Major League Baseball" },
      { word: "ROBINSON", clue: "Last name of MLB barrier breaker Jackie" },
      { word: "HURSTON", clue: "Zora Neale ___ wrote Their Eyes Were Watching God" },
      { word: "BALDWIN", clue: "James ___ wrote about race, identity, and America" },
      { word: "OPRAH", clue: "Media pioneer and philanthropist with one famous first name" },
      { word: "ALI", clue: "Muhammad ___, boxing champion and activist" },
      { word: "SERENA", clue: "Tennis champion with 23 Grand Slam singles titles" },
      { word: "BILES", clue: "Simone ___, decorated Olympic gymnast" },
      { word: "PRINCE", clue: "Musician known for Purple Rain" },
      { word: "BEYONCE", clue: "Singer whose work includes Renaissance and Lemonade" }
    ]
  },
  {
    id: "harlem-renaissance",
    title: "Harlem Renaissance",
    description: "Writers, musicians, venues, and ideas from the Harlem Renaissance era.",
    words: [
      { word: "HARLEM", clue: "New York neighborhood central to this cultural movement" },
      { word: "HUGHES", clue: "Langston ___, poet of The Weary Blues" },
      { word: "JAZZ", clue: "Music style strongly tied to the movement" },
      { word: "BLUES", clue: "Musical form often expressing struggle and emotion" },
      { word: "COTTON", clue: "___ Club, famous Harlem nightclub" },
      { word: "APOLLO", clue: "Legendary Harlem theater" },
      { word: "ELLINGTON", clue: "Duke ___, jazz composer and bandleader" },
      { word: "ZORA", clue: "First name of writer Hurston" },
      { word: "NOVEL", clue: "Long work of fiction; Hurston and Larsen wrote them" },
      { word: "POETRY", clue: "A major literary form of the era" },
      { word: "RENAISSANCE", clue: "Word meaning rebirth; also names this cultural era" },
      { word: "ART", clue: "Creative expression through painting, music, writing, and more" },
      { word: "CULTURE", clue: "Shared art, ideas, language, and traditions" },
      { word: "MIGRATION", clue: "The Great ___ helped grow Black communities in northern cities" },
      { word: "IDENTITY", clue: "A key theme explored by Harlem Renaissance artists" }
    ]
  },
  {
    id: "black-inventors",
    title: "Black Inventors & STEM",
    description: "Scientists, engineers, inventors, and technology pioneers.",
    words: [
      { word: "CARVER", clue: "George Washington ___, agricultural scientist" },
      { word: "LATIMER", clue: "Lewis ___ improved electric light technology" },
      { word: "MORGAN", clue: "Garrett ___ patented a traffic signal and safety hood" },
      { word: "JEMISON", clue: "Mae ___, first Black woman in space" },
      { word: "NASA", clue: "Space agency where Hidden Figures mathematicians worked" },
      { word: "KATHERINE", clue: "First name of Johnson, NASA mathematician" },
      { word: "JOHNSON", clue: "Last name of Katherine, whose calculations supported space missions" },
      { word: "HIDDEN", clue: "___ Figures highlighted Black women mathematicians at NASA" },
      { word: "FIGURES", clue: "Hidden ___, film/book about NASA mathematicians" },
      { word: "PATENT", clue: "Legal protection for an invention" },
      { word: "SCIENCE", clue: "Study of the natural world through evidence" },
      { word: "ENGINEER", clue: "Person who designs and builds systems or structures" },
      { word: "INVENTOR", clue: "Person who creates a new device or process" },
      { word: "COMPUTER", clue: "Machine used for calculations and programming" },
      { word: "MATH", clue: "Subject used heavily in coding, engineering, and space flight" }
    ]
  },
  {
    id: "black-history-month",
    title: "Black History Month",
    description: "Terms, people, and places often studied during Black History Month.",
    words: [
      { word: "FEBRUARY", clue: "Month when Black History Month is celebrated in the U.S." },
      { word: "CARTER", clue: "First name of historian Woodson" },
      { word: "WOODSON", clue: "Historian who helped create Negro History Week" },
      { word: "AFRICA", clue: "Continent central to the African diaspora" },
      { word: "DIASPORA", clue: "Communities spread from an ancestral homeland" },
      { word: "JUNETEENTH", clue: "Holiday marking the end of slavery in the U.S." },
      { word: "EMANCIPATION", clue: "Freedom from slavery" },
      { word: "HISTORY", clue: "Study of past people and events" },
      { word: "LEGACY", clue: "What someone leaves behind for future generations" },
      { word: "HERITAGE", clue: "Traditions and background passed down through generations" },
      { word: "ANCESTORS", clue: "Family members from earlier generations" },
      { word: "UNITY", clue: "Togetherness and shared purpose" },
      { word: "CULTURE", clue: "Shared art, language, traditions, and beliefs" },
      { word: "PRIDE", clue: "Positive feeling about identity and achievement" },
      { word: "RESILIENCE", clue: "Strength to recover and keep going" }
    ]
  }
];

function emptyGrid() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(""));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function canPlace(grid, word, row, col, dir, allowNoOverlap = false) {
  const dr = dir === "down" ? 1 : 0;
  const dc = dir === "across" ? 1 : 0;
  const endRow = row + dr * (word.length - 1);
  const endCol = col + dc * (word.length - 1);
  if (endRow >= SIZE || endCol >= SIZE || row < 0 || col < 0) return false;

  let overlaps = 0;
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    const current = grid[r][c];
    if (current && current !== word[i]) return false;
    if (current === word[i]) overlaps++;

    if (!current) {
      if (dir === "across") {
        if ((grid[r - 1]?.[c] || "") || (grid[r + 1]?.[c] || "")) return false;
      } else {
        if ((grid[r]?.[c - 1] || "") || (grid[r]?.[c + 1] || "")) return false;
      }
    }
  }

  const beforeRow = row - dr;
  const beforeCol = col - dc;
  const afterRow = row + dr * word.length;
  const afterCol = col + dc * word.length;
  if (grid[beforeRow]?.[beforeCol]) return false;
  if (grid[afterRow]?.[afterCol]) return false;

  return allowNoOverlap || overlaps > 0;
}

function placeWord(grid, item, row, col, dir) {
  const dr = dir === "down" ? 1 : 0;
  const dc = dir === "across" ? 1 : 0;
  for (let i = 0; i < item.word.length; i++) grid[row + dr * i][col + dc * i] = item.word[i];
  return { ...item, row, col, dir };
}

function tryPlaceWithCrossing(grid, item) {
  const options = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const letter = grid[r][c];
      if (!letter) continue;
      for (let i = 0; i < item.word.length; i++) {
        if (item.word[i] !== letter) continue;
        options.push({ row: r, col: c - i, dir: "across" });
        options.push({ row: r - i, col: c, dir: "down" });
      }
    }
  }
  for (const option of shuffle(options)) {
    if (canPlace(grid, item.word, option.row, option.col, option.dir)) {
      return placeWord(grid, item, option.row, option.col, option.dir);
    }
  }
  return null;
}

function generatePuzzle(themeId = puzzleSelect.value) {
  const bank = puzzleBanks.find(p => p.id === themeId) || puzzleBanks[0];
  puzzleSelect.value = bank.id;
  puzzleTitle.textContent = bank.title;
  themeDescription.textContent = bank.description;

  const grid = emptyGrid();
  const words = shuffle(bank.words).slice(0, 13).sort((a, b) => b.word.length - a.word.length);
  const placed = [];
  const first = words[0];
  const firstRow = Math.floor(SIZE / 2);
  const firstCol = Math.floor((SIZE - first.word.length) / 2);
  placed.push(placeWord(grid, first, firstRow, firstCol, "across"));

  for (const item of words.slice(1)) {
    const result = tryPlaceWithCrossing(grid, item);
    if (result) placed.push(result);
  }

  numberWords(placed);
  renderGrid(grid, placed);
  renderClues(placed);
}

function numberWords(placed) {
  const starts = new Map();
  placed.forEach(word => starts.set(`${word.row},${word.col}`, true));
  let num = 1;
  [...starts.keys()]
    .map(key => key.split(",").map(Number))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .forEach(([row, col]) => {
      placed.forEach(word => {
        if (word.row === row && word.col === col) word.number = num;
      });
      num++;
    });
}

function renderGrid(grid, placed) {
  crosswordEl.innerHTML = "";
  crosswordEl.classList.remove("show-answers");
  crosswordEl.style.gridTemplateColumns = `repeat(${SIZE}, 34px)`;

  const numbers = new Map();
  placed.forEach(word => numbers.set(`${word.row},${word.col}`, word.number));

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (!grid[r][c]) {
        cell.classList.add("block");
      } else {
        if (numbers.has(`${r},${c}`)) {
          const number = document.createElement("span");
          number.className = "number";
          number.textContent = numbers.get(`${r},${c}`);
          cell.appendChild(number);
        }
        const input = document.createElement("input");
        input.maxLength = 1;
        input.setAttribute("aria-label", `Row ${r + 1}, column ${c + 1}`);
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^a-z]/gi, "").toUpperCase();
        });
        const answer = document.createElement("span");
        answer.className = "answer";
        answer.textContent = grid[r][c];
        cell.appendChild(input);
        cell.appendChild(answer);
      }
      crosswordEl.appendChild(cell);
    }
  }
}

function renderClues(placed) {
  acrossCluesEl.innerHTML = "";
  downCluesEl.innerHTML = "";
  const sorted = [...placed].sort((a, b) => a.number - b.number);
  for (const item of sorted) {
    const li = document.createElement("li");
    li.value = item.number;
    li.innerHTML = `${item.clue} <span class="answer-word">(${item.word.length})</span>`;
    if (item.dir === "across") acrossCluesEl.appendChild(li);
    else downCluesEl.appendChild(li);
  }
}

function setupThemes() {
  puzzleSelect.innerHTML = "";
  puzzleBanks.forEach(bank => {
    const option = document.createElement("option");
    option.value = bank.id;
    option.textContent = bank.title;
    puzzleSelect.appendChild(option);
  });
}


function cleanAIWord(rawWord) {
  return String(rawWord || "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 15);
}

function normalizeAIItems(items) {
  const seen = new Set();
  return items
    .map(item => ({
      word: cleanAIWord(item.word || item.term),
      clue: String(item.definition || item.clue || "").trim()
    }))
    .filter(item => item.word.length >= 3 && item.word.length <= 15 && item.clue.length >= 10)
    .filter(item => {
      if (seen.has(item.word)) return false;
      seen.add(item.word);
      return true;
    })
    .slice(0, 18);
}

function extractJsonArray(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("The AI did not return a JSON array.");
    return JSON.parse(match[0]);
  }
}

async function generateAIWordBank() {
  const apiKey = (window.OPENAI_API_KEY || "").trim();
  const topic = aiTopicInput.value.trim() || "Black History Month";
  const difficulty = difficultySelect.value;

  if (!apiKey || apiKey === "PASTE_YOUR_OPENAI_API_KEY_HERE") {
    aiStatus.textContent = "Open config.js and paste your OpenAI API key first, or keep using the built-in puzzles.";
    return;
  }
  aiGenerateBtn.disabled = true;
  aiStatus.textContent = "Generating Black History terms and definitions...";

  try {
    const prompt = `Create a crossword word bank about ${topic} in Black history for ${difficulty} students. Return ONLY a JSON array of 15 objects. Each object must have "word" and "definition". Words must be single crossword answers with only letters A-Z, no spaces, no hyphens, 3 to 15 letters. Definitions should be accurate, respectful, and useful as crossword clues.`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText.slice(0, 180)}`);
    }

    const data = await response.json();
    const text = data.output_text || data.output?.flatMap(part => part.content || []).map(content => content.text || "").join("\n") || "";
    const items = normalizeAIItems(extractJsonArray(text));

    if (items.length < 8) throw new Error("The AI returned too few usable crossword words. Try a broader topic.");

    const aiBank = {
      id: "ai-generated",
      title: `AI: ${topic}`,
      description: `AI-generated Black History crossword terms for ${difficulty} level.`,
      words: items.map(item => ({ word: item.word, clue: item.clue }))
    };

    const existingIndex = puzzleBanks.findIndex(bank => bank.id === "ai-generated");
    if (existingIndex >= 0) puzzleBanks[existingIndex] = aiBank;
    else puzzleBanks.unshift(aiBank);

    setupThemes();
    generatePuzzle("ai-generated");
    aiStatus.textContent = `Generated ${items.length} AI terms. Review clues for accuracy before using in class.`;
  } catch (error) {
    console.error(error);
    aiStatus.textContent = `${error.message} Using built-in puzzles still works.`;
  } finally {
    aiGenerateBtn.disabled = false;
  }
}

document.getElementById("generateBtn").addEventListener("click", () => generatePuzzle());
document.getElementById("randomThemeBtn").addEventListener("click", () => {
  const bank = shuffle(puzzleBanks)[0];
  generatePuzzle(bank.id);
});
document.getElementById("revealBtn").addEventListener("click", () => crosswordEl.classList.add("show-answers"));
document.getElementById("hideBtn").addEventListener("click", () => crosswordEl.classList.remove("show-answers"));
puzzleSelect.addEventListener("change", () => generatePuzzle());
aiGenerateBtn.addEventListener("click", generateAIWordBank);

setupThemes();
generatePuzzle(puzzleBanks[0].id);
