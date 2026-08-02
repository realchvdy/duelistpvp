const DB_STATS = {
    visits: '11.6M+',
    favorites: '19.8K+',
    likes: '95%'
};

const DB_UPDATES = [
      {
    id: 10,
    title: "Update — 07/31/2026",
    date: "July 31, 2026",
    version: "LATEST",
    notes_add: [
        "Added Sounds/Tracers to Diamond Bundle",
        "Added FFA gamemode",
        "Added Breakable Glasses",
        "Added New Undead Bundle"
    ],
    notes_fix: [
        "Fire Bundle is tradable now",
        "Fixed a lot of bugs"
    ]
    },
    {
    id: 9,
    title: "Update — 07/24/2026",
    date: "July 24, 2026",
    version: "UPDATE",
    notes_add: [
        "Added Exists to the skins",
        "Added NEW Gun AP PISTOL",
        "Added Diamond Bundle",
        "Added Anti cheat to aim system",
        "Added Premium and verification badge next to username"
    ],
    notes_fix: [
        "Changed Aim system, should be more smooth now",
        "Buffed Pistol and Carabine",
        "Fixed a lot of bugs"
    ]
    },
    {
    id: 8,
    title: "Update — 07/17/2026",
    date: "July 17, 2026",
    version: "UPDATE",
    notes_add: [
        "Added party saving",
        "Added Blackmarket (robux & ingame credits)",
        "Added 8 new backpacks",
        "Added 4 new emotes",
        "Added new stock premium skin 'Red Shark Bite' (ONLY 500 IN STOCK)",
        "Added editable layout for mobile players",
        "Added Bullet holes"
    ],
    notes_fix: [
        "Fixed Matchmaking",
        "Fixed PlayerCards",
        "Fixed Bugs"
    ]
    },
    {
    id: 7,
    title: "Update — 07/11/2026",
    date: "July 11, 2026",
    version: "UPDATE",
    notes_add: [
        "Matchmaking",
        "Added 3 new emotes",
        "Added back the teeth emote with new animation"
    ],
    notes_fix: [
        "Ghost peeking/Shooting thru the walls fixed!",
        "Battle pass is easier to lvl up",
        "Bug Fixes"
    ]
    },
    {
    id: 6,
    title: "Update — 07/08/2026",
    date: "July 08, 2026",
    version: "UPDATE",
    notes_add: [
        "Summer Battle Pass with free version and premium one",
        "New Summer Music + Background sounds",
        "New Summer Lobby",
        "Duels Invites",
        "Private servers (data is not saving there and robux purchases is off)",
        "Bunch of new gun skins/backpacks/killfxs"
    ],
    notes_fix: [
        "Bug Fixes"
    ]
    },
    {
    id: 5,
    title: "Update — 07/03/2026",
    date: "July 03, 2026",
    version: "UPDATE",
    notes_add: [
        "Trading System (Requires Level 100)",
        "3 New emotes",
        "Added a new anti-cheat system",
        "New Bundles"
    ],
    notes_fix: [
        "Water Gun has been revamped",
        "Codes now require Level 50 (This was always meant to be the requirement)",
        "Revamped buttons and several UI elements",
        "Reworked the Win Streak system",
        "Fixed a bunch of bugs and improved overall stability"
    ]
    },
    {
    id: 4,
    title: "Update — 06/28/2026",
    date: "June 28, 2026",
    version: "UPDATE",
    notes_add: [
        "6 New emotes",
        "Added Cooldown to equip gun 0.25 sec",
        "Added 10 new backpacks"
    ],
    notes_fix: [
        "Lags should be reduced",
        "Changed Servers slots from 20 to 16 (to reduce lags)",
        "Fixed the spectate UI close button",
        "Removed Fire Bundle as the reward for joining the Roblox group"
    ]
    },
    {
    id: 3,
    title: "Update — 06/27/2026",
    date: "June 27, 2026",
    version: "UPDATE",
    notes_add: [
        "Increased server slots 12 → 20",
        "Added Skip Button to cases",
        "Added Boost for XP/Money",
        "Added PlayerCards!",
        "Added 10 new backpacks",
        "Added new Ionized Bundle reward for joining the Roblox group",
        "Added new bundle 'Rose'"
    ],
    notes_fix: [
        "Removed Fire Bundle as the reward for joining the Roblox group"
    ]
    },
    {
    id: 2,
    title: "Update — 06/23/2026",
    date: "June 23, 2026",
    version: "UPDATE",
    notes_add: [
        "Added Anti-cheat (Movement, Rage Options, Changing values of the guns)",
        "Added Refresh Button in daily shop for emotes/daily skins (49 robux)",
        "Added Level Req to use codes: 50 level"
    ],
    notes_fix: []
    },
    {
    id: 1,
    title: "Update — 06/22/2026",
    date: "June 22, 2026",
    version: "UPDATE",
    notes_add: [
        "Added Shutdown UI for updates",
        "Added security for the skins exploits",
        "Added completely new view frame in cases with the names and % for each skin",
        "Added option to gift premium skins, pogo pack, credits, gamepasses in shop"
    ],
    notes_fix: [
        "Fixed small heads (only normal head and headless is allowed now)",
        "Fixed not being able to shoot (should be better)",
        "Fixed FOV bug",
        "Fixed animations",
        "Fixed mobile buttons appears on PC",
        "Fixed aimview for mobile/console players (only staff)",
        "Fixed crosshair glitch"
    ]
    },
    {
    id: 0,
    title: "Update — 06/21/2026",
    date: "June 21, 2026",
    version: "UPDATE",
    notes_add: [
        "Added country restrictions to Netherlands/Belgium/United Kingdom/Australia",
        "Every case is tradable (only new cases in new servers)",
        "Added that if player leaves from 2vs2/3vs3 it doesn’t end the completely match"
    ],
    notes_fix: [
        "Fixed show heads settings",
        "Fixed sometimes not shooting",
        "Fixed Spectate UI",
        "Fixed Kill Sounds",
        "Fixed dying in the round",
        "Removed blood from the game",
        "Removed Show Heads for now",
        "Fixed Emotes canceling when typing in chat"
    ]
    }
];

const DB_CODES = [
    { code: "12Mvisits!", reward: "2x money Boost for 30 minutes!", status: "Active" },
    { code: "18klikessss", reward: "5 Lucky Player Spins!", status: "Active" },
    { code: "FFA!", reward: "20,000 Credits!", status: "Active" },
    { code: "APPISTOL!", reward: "10,000 Credits!", status: "Active" },
    { code: "wowie", reward: "5 Lucky Player Spins!", status: "Active" },
    { code: "SUMMERTIME", reward: "1x red quartz gun skin!", status: "Active" }
];

const DB_MAPS = [
    { name: "Nostalgia", desc: "A classic arena bringing back the oldest memories of combat. Tight corners and familiar sightlines.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/Nostalgia.png" },
    { name: "DueFuel", desc: "Fight around volatile fuel tanks and industrial piping. High risk, high reward engagements.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/DueFuel.png" },
    { name: "Chess", desc: "A tactical battleground set on a giant chessboard. Plan your moves carefully and control the center.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/Chess.png" },
    { name: "DueGunz", desc: "An intense urban shootout arena designed for fast-paced movement and rapid crossfire.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/DueGuns.png" },
    { name: "Chicken Factory", desc: "A quirky but deadly processing plant. Don't let the scenery distract you from the angles.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/Chicken%20Factory.png" },
    { name: "Night Shift", desc: "A massive industrial complex offering a mix of close-quarters and long-range tactical combat.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/NightShift.png" },
    { name: "Roof", desc: "High altitude combat with massive verticality and perilous drops. Watch your step.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/Roof.png" },
    { name: "Boxyard", desc: "A maze of shipping containers providing endless flanking routes and sudden, close encounters.", image: "https://raw.githubusercontent.com/realchvdy/duelistpvp/refs/heads/main/assets/images/maps/BoxYard.png" }
];

const DB_STAFF = [
    { roleCat: "Website Developer", members: [
    { name: "@realchvdy", role: " Lead Website Developer", desc: "Single-handedly designed, built, and maintains the entire DuelistPvP website.", avatar: "R" }
    ]},
    { roleCat: "Game Developers", members: [
    { name: "@ogkabus", role: "Lead Scripter", desc: "Main programmer in charge of core gameplay scripting and system logic.", avatar: "O" },
    { name: "@wesiient", role: "3D Artist & UI Designer", desc: "Responsible for 3D modeling, map building, and UI design.", avatar: "W" },
    { name: "@diedv", role: "Audio Engineer", desc: "Creates and engineers all custom in-game sound effects.", avatar: "D" }
    ]},
    { roleCat: "Managers", members: [
    { name: "@plastek", role: "Head Manager", desc: "Head manager overseeing community operations and staff.", avatar: "P" },
    { name: "@6qw", role: "Media Manager", desc: "Manages communication with content creators.", avatar: "6" },
    { name: "@ognores", role: "Testing Manager", desc: "Coordinates the testing team and bug reporting.", avatar: "O" }
    ]},
    { roleCat: "Senior Staff", members: [
    { name: "@fierc9", role: "Senior Staff", desc: "Advanced community moderation.", avatar: "6" },
    { name: "@vpnloop", role: "Senior Staff", desc: "Advanced community moderation.", avatar: "V" },
    ]},
    { roleCat: "Staff", members: [
    { name: "@d.boyy", role: "Staff", desc: "Official community moderator.", avatar: "B" },
    { name: "@dominio1w7.", role: "Staff", desc: "Official community moderator.", avatar: "8" },
    { name: "@uzhf", role: "Staff", desc: "Official community moderator.", avatar: "U" },
    { name: "@barce7", role: "Staff", desc: "Official community moderator.", avatar: "F" },
    { name: "@xenzpr", role: "Staff", desc: "Official community moderator.", avatar: "C" },
    { name: "@srryilarp", role: "Staff", desc: "Official community moderator.", avatar: "0" },
    { name: "@leekgp", role: "Staff", desc: "Official community moderator.", avatar: "B" },
    { name: "@06kve", role: "Staff", desc: "Official community moderator.", avatar: "S" }
    ]}
];

// Emptied for now - waiting for new transmissions
const DB_CLIPS = [];

// Emptied for now - waiting for active crosshairs
const DB_CROSSHAIRS = [];
