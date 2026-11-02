const sportProfiles = {
  basketball: {
    name: 'Basketball',
    role: 'Power + repeat sprint',
    fuel: 'Carbohydrate',
    protein: '1.8–2.2g/kg',
    hydration: '3.0–3.5L/day',
    focus: 'Explosive power',
    coach: 'Keep carbs high around gameplay and high-intensity sessions. Recovery nutrition should be timed within 60 minutes after play.',
    meals: [
      { time: 'Breakfast', name: 'Oats + whey', tag: 'High carb', kcal: '540 kcal' },
      { time: 'Lunch', name: 'Chicken rice veg', tag: 'Lean protein', kcal: '670 kcal' },
      { time: 'Pre-game', name: 'Banana + yogurt', tag: 'Fast fuel', kcal: '260 kcal' },
      { time: 'Post-game', name: 'Smoothie + rice cakes', tag: 'Recovery', kcal: '420 kcal' }
    ]
  },
  soccer: {
    name: 'Soccer',
    role: 'Endurance + acceleration',
    fuel: 'Carbohydrate + sodium',
    protein: '1.6–2.0g/kg',
    hydration: '2.8–3.4L/day',
    focus: 'Repeated sprint ability',
    coach: 'Soccer athletes need efficient glycogen restoration and careful hydration. Focus on quick carbs before sessions and around match-day fueling.',
    meals: [
      { time: 'Breakfast', name: 'Bagel + eggs', tag: 'Energy', kcal: '520 kcal' },
      { time: 'Lunch', name: 'Turkey pasta bowl', tag: 'Balanced', kcal: '690 kcal' },
      { time: 'Pre-match', name: 'Rice cakes + fruit', tag: 'Quick carbs', kcal: '240 kcal' },
      { time: 'Recovery', name: 'Protein shake + fruit', tag: 'Muscle repair', kcal: '350 kcal' }
    ]
  },
  tennis: {
    name: 'Tennis',
    role: 'Explosive intervals',
    fuel: 'Carbohydrate',
    protein: '1.6–2.0g/kg',
    hydration: '2.6–3.2L/day',
    focus: 'Serve rhythm + deceleration',
    coach: 'Tennis demands repeated high-intensity efforts with short recovery. Prioritize carb timing before and after long sessions and manage fluid loss from heat and court movement.',
    meals: [
      { time: 'Breakfast', name: 'Greek yogurt + granola', tag: 'Fast energy', kcal: '480 kcal' },
      { time: 'Lunch', name: 'Salmon rice salad', tag: 'Lean recovery', kcal: '640 kcal' },
      { time: 'Pre-session', name: 'Banana + toast', tag: 'Quick fuel', kcal: '220 kcal' },
      { time: 'Post-match', name: 'Recovery smoothie', tag: 'Rebuild', kcal: '390 kcal' }
    ]
  },
  wrestling: {
    name: 'Wrestling',
    role: 'Strength + weight management',
    fuel: 'Carbohydrates + protein',
    protein: '1.8–2.4g/kg',
    hydration: '2.8–3.5L/day',
    focus: 'Grip, hip rotation, balance',
    coach: 'Wrestling athletes need smart weight management without sacrificing performance. Use structured carb intake around sessions and maintain recovery nutrition around high training loads.',
    meals: [
      { time: 'Breakfast', name: 'Eggs + potatoes', tag: 'Fuel', kcal: '560 kcal' },
      { time: 'Lunch', name: 'Chicken quinoa bowl', tag: 'Lean protein', kcal: '700 kcal' },
      { time: 'Pre-practice', name: 'Fruit + yogurt', tag: 'Quick carbs', kcal: '250 kcal' },
      { time: 'Recovery', name: 'Protein oats', tag: 'Muscle support', kcal: '430 kcal' }
    ]
  },
  rugby: {
    name: 'Rugby',
    role: 'Power + repeated contact',
    fuel: 'Carbohydrate + protein',
    protein: '1.8–2.3g/kg',
    hydration: '3.0–3.8L/day',
    focus: 'Collision tolerance',
    coach: 'Rugby demands strong glycogen availability and collision-ready recovery. Prioritize total calorie intake and sodium balance for repeated contact days.',
    meals: [
      { time: 'Breakfast', name: 'Porridge + berries', tag: 'Sustained fuel', kcal: '520 kcal' },
      { time: 'Lunch', name: 'Beef rice bowl', tag: 'Muscle repair', kcal: '720 kcal' },
      { time: 'Pre-training', name: 'Toast + jam', tag: 'Quick carb', kcal: '230 kcal' },
      { time: 'Recovery', name: 'Protein shake + fruit', tag: 'Reset', kcal: '360 kcal' }
    ]
  },
  volleyball: {
    name: 'Volleyball',
    role: 'Jump power + timing',
    fuel: 'Carbohydrate',
    protein: '1.6–2.0g/kg',
    hydration: '2.8–3.3L/day',
    focus: 'Explosive vertical output',
    coach: 'Keep glycogen topped up before high-impact sessions. Recovery fast carbs and protein are especially important after repeated jumping blocks.',
    meals: [
      { time: 'Breakfast', name: 'Cereal + milk', tag: 'Quick fuel', kcal: '500 kcal' },
      { time: 'Lunch', name: 'Chicken wrap', tag: 'Balanced', kcal: '620 kcal' },
      { time: 'Pre-match', name: 'Banana + yogurt', tag: 'Jump support', kcal: '250 kcal' },
      { time: 'Recovery', name: 'Smoothie + oats', tag: 'Rebuild', kcal: '410 kcal' }
    ]
  },
  swimming: {
    name: 'Swimming',
    role: 'Endurance + stroke efficiency',
    fuel: 'Carbohydrate + recovery protein',
    protein: '1.6–2.0g/kg',
    hydration: '2.7–3.2L/day',
    focus: 'Stroke consistency',
    coach: 'Swimming performance depends on glycogen availability, consistent iron status, and strategy around longer sessions. Recovery nutrition should be consistent even when appetite is low.',
    meals: [
      { time: 'Breakfast', name: 'Bagel + peanut butter', tag: 'Energy', kcal: '540 kcal' },
      { time: 'Lunch', name: 'Rice + fish', tag: 'Lean protein', kcal: '660 kcal' },
      { time: 'Pre-session', name: 'Fruit + granola', tag: 'Fast carbs', kcal: '260 kcal' },
      { time: 'Recovery', name: 'Protein cereal bowl', tag: 'Repair', kcal: '390 kcal' }
    ]
  },
  track: {
    name: 'Track & Field',
    role: 'Speed + power',
    fuel: 'Carbohydrate',
    protein: '1.7–2.2g/kg',
    hydration: '2.8–3.4L/day',
    focus: 'Acceleration mechanics',
    coach: 'Track athletes need a sharp pre-session carb strategy and careful recovery after sprint work. Hard speed sessions require strong fueling to avoid performance losses.',
    meals: [
      { time: 'Breakfast', name: 'Toast + eggs', tag: 'Power', kcal: '520 kcal' },
      { time: 'Lunch', name: 'Rice + chicken', tag: 'Muscle fuel', kcal: '680 kcal' },
      { time: 'Pre-meet', name: 'Fruit + yogurt', tag: 'Quick hit', kcal: '230 kcal' },
      { time: 'Recovery', name: 'Shake + fruit', tag: 'Rebuild', kcal: '380 kcal' }
    ]
  },
  baseball: {
    name: 'Baseball',
    role: 'Power + repeat bursts',
    fuel: 'Carbohydrate + protein',
    protein: '1.6–2.0g/kg',
    hydration: '2.6–3.2L/day',
    focus: 'Bat speed + reaction',
    coach: 'Baseball often includes long practice days and repeated bursts of effort. Keep energy stable across the day and avoid large gaps between meals to maintain consistency.',
    meals: [
      { time: 'Breakfast', name: 'Eggs + toast', tag: 'Steady fuel', kcal: '500 kcal' },
      { time: 'Lunch', name: 'Chicken burrito', tag: 'Balanced', kcal: '680 kcal' },
      { time: 'Pre-practice', name: 'Banana + granola', tag: 'Quick energy', kcal: '250 kcal' },
      { time: 'Recovery', name: 'Protein oats', tag: 'Recovery', kcal: '420 kcal' }
    ]
  },
  badminton: {
    name: 'Badminton',
    role: 'Speed + court movement',
    fuel: 'Carbohydrate',
    protein: '1.6–2.0g/kg',
    hydration: '2.5–3.0L/day',
    focus: 'Footwork and agility',
    coach: 'Badminton is a high-speed, high-frequency movement sport, making precise carbohydrate timing and hydration especially important for sharpness.',
    meals: [
      { time: 'Breakfast', name: 'Fruit smoothie', tag: 'Fast fuel', kcal: '430 kcal' },
      { time: 'Lunch', name: 'Chicken rice bowl', tag: 'Recovery', kcal: '620 kcal' },
      { time: 'Pre-session', name: 'Yogurt + fruit', tag: 'Quick carbs', kcal: '210 kcal' },
      { time: 'Recovery', name: 'Protein shake', tag: 'Repair', kcal: '300 kcal' }
    ]
  },
  rowing: {
    name: 'Rowing',
    role: 'Power endurance',
    fuel: 'Carbohydrate + recovery protein',
    protein: '1.7–2.1g/kg',
    hydration: '2.8–3.6L/day',
    focus: 'Stroke power and sustainability',
    coach: 'Rowing blends heavy aerobic work with explosive power. Keep carbs available across long rows and prioritize recovery fuel after race-specific sessions.',
    meals: [
      { time: 'Breakfast', name: 'Oats + fruit', tag: 'Endurance', kcal: '550 kcal' },
      { time: 'Lunch', name: 'Pasta + chicken', tag: 'High carb', kcal: '720 kcal' },
      { time: 'Pre-row', name: 'Rice cakes + juice', tag: 'Fast fuel', kcal: '260 kcal' },
      { time: 'Recovery', name: 'Protein smoothie', tag: 'Rebuild', kcal: '410 kcal' }
    ]
  },
  gymnastics: {
    name: 'Gymnastics',
    role: 'Power + body control',
    fuel: 'Balanced carbs + protein',
    protein: '1.6–2.0g/kg',
    hydration: '2.5–3.1L/day',
    focus: 'Timing and precision',
    coach: 'Gymnastics requires consistent fueling around body composition goals without compromising explosive power and recovery. Prioritize regular meals and stable energy intake.',
    meals: [
      { time: 'Breakfast', name: 'Greek yogurt bowl', tag: 'Balanced', kcal: '470 kcal' },
      { time: 'Lunch', name: 'Chicken potatoes', tag: 'Lean protein', kcal: '660 kcal' },
      { time: 'Pre-training', name: 'Banana + toast', tag: 'Quick energy', kcal: '210 kcal' },
      { time: 'Recovery', name: 'Protein oats', tag: 'Repair', kcal: '380 kcal' }
    ]
  }
};

const sportKeys = Object.keys(sportProfiles);
const sportPicker = document.getElementById('sportPicker');
const analysisSport = document.getElementById('analysisSport');
const videoUpload = document.getElementById('videoUpload');
const previewVideo = document.getElementById('previewVideo');

const sportBadge = document.getElementById('sportBadge');
const sportRole = document.getElementById('sportRole');
const primaryFuel = document.getElementById('primaryFuel');
const proteinTarget = document.getElementById('proteinTarget');
const hydrationTarget = document.getElementById('hydrationTarget');
const sessionFocus = document.getElementById('sessionFocus');
const dailyCoachNote = document.getElementById('dailyCoachNote');
const mealList = document.getElementById('mealList');

const movementQuality = document.getElementById('movementQuality');
const loadEfficiency = document.getElementById('loadEfficiency');
const fatigueSignal = document.getElementById('fatigueSignal');
const priorityFix = document.getElementById('priorityFix');
const analysisNote = document.getElementById('analysisNote');

function renderSportPicker(selectedKey = 'basketball') {
  sportPicker.innerHTML = '';

  sportKeys.forEach((key) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `sport-chip ${key === selectedKey ? 'selected' : ''}`;
    button.textContent = sportProfiles[key].name;

    button.addEventListener('click', () => {
      renderSportPicker(key);
      updateSportDashboard(key);
      analysisSport.value = key;
      updateAnalysisFromSport(key);
    });

    sportPicker.appendChild(button);
  });
}

function updateSportDashboard(key) {
  const sport = sportProfiles[key];

  sportBadge.textContent = sport.name;
  sportRole.textContent = sport.role;
  primaryFuel.textContent = sport.fuel;
  proteinTarget.textContent = sport.protein;
  hydrationTarget.textContent = sport.hydration;
  sessionFocus.textContent = sport.focus;
  dailyCoachNote.textContent = sport.coach;

  mealList.innerHTML = '';
  sport.meals.forEach((meal) => {
    const row = document.createElement('div');
    row.className = 'meal-row';
    row.innerHTML = `
      <span class="time">${meal.time}</span>
      <span class="name">${meal.name}</span>
      <span class="tag">${meal.tag}</span>
      <span class="kcal">${meal.kcal}</span>
    `;
    mealList.appendChild(row);
  });
}

function generateAnalysisForSport(sportKey) {
  const profiles = {
    basketball: {
      movement: '8.7/10',
      load: '86%',
      fatigue: 'Low to moderate',
      priority: 'Keep carbs high',
      note: 'Movement is controlled but a drop in rhythm appears in the later phases of the session. Pre-game carbs and post-session recovery remain the biggest levers.'
    },
    soccer: {
      movement: '8.5/10',
      load: '83%',
      fatigue: 'Moderate',
      priority: 'Hydration timing',
      note: 'Acceleration and cutting mechanics look clean, but there is a late-session decline in explosive output. Increase fluid intake and make sure glycogen availability is maintained.'
    },
    tennis: {
      movement: '8.3/10',
      load: '80%',
      fatigue: 'Moderate',
      priority: 'Serve consistency',
      note: 'Serve mechanics are stable but timing loses efficiency after repeated points. More carbohydrate intake around long sessions and better hydration will help maintain sharp movement.'
    },
    wrestling: {
      movement: '8.1/10',
      load: '78%',
      fatigue: 'High',
      priority: 'Recovery and balance',
      note: 'Grip and hip position are strong, but fatigue breaks down balance and control under pressure. Recovery nutrition and structured rest are critical before the next round.'
    },
    rugby: {
      movement: '8.6/10',
      load: '87%',
      fatigue: 'Moderate',
      priority: 'Sodium + carbs',
      note: 'Contact readiness and acceleration are good, but output drops after repeated collisions. Add sodium-rich hydration and recovery carbs after session load.'
    },
    volleyball: {
      movement: '8.8/10',
      load: '88%',
      fatigue: 'Low',
      priority: 'Jump preparation',
      note: 'Explosive movement is solid, though repeated jumping can create fatigue in the later phases. Focus on pre-session carbs and fast recovery after major blocks.'
    },
    swimming: {
      movement: '8.4/10',
      load: '82%',
      fatigue: 'Moderate',
      priority: 'Stroke efficiency',
      note: 'Stroke rhythm remains strong early, but there is a slight reduction in body line consistency in the final intervals. Recovery fueling and improved fluid timing can support output.'
    },
    track: {
      movement: '8.9/10',
      load: '89%',
      fatigue: 'Low to moderate',
      priority: 'Explosive prep',
      note: 'Acceleration is strong and mechanics stay well organized. Reduce recovery gaps and keep carbs around hard sprint days to maintain top-speed output.'
    },
    baseball: {
      movement: '8.2/10',
      load: '81%',
      fatigue: 'Moderate',
      priority: 'Reaction timing',
      note: 'The athlete shows solid base mechanics, but reaction speed drops toward the end of long practice blocks. Improve fuel consistency throughout the day and support recovery between sessions.'
    },
    badminton: {
      movement: '8.6/10',
      load: '84%',
      fatigue: 'Moderate',
      priority: 'Footwork sharpness',
      note: 'Footwork and court coverage remain strong, but repetitive changes in direction create a slight drop in agility late in play. Maintain carbohydrate timing and stay hydrated during longer rallies.'
    },
    rowing: {
      movement: '8.7/10',
      load: '86%',
      fatigue: 'Moderate',
      priority: 'Power endurance',
      note: 'The rower maintains rhythm well but loses stroke power during the final intervals. Greater carb support around longer training blocks and a quick recovery window will help maintain output.'
    },
    gymnastics: {
      movement: '8.9/10',
      load: '85%',
      fatigue: 'Low to moderate',
      priority: 'Body control',
      note: 'Precision and control are excellent, but fatigue impacts rhythm and line quality in later repetitions. Stable meal timing and recovery nutrition will support cleaner execution.'
    }
  };

  return profiles[sportKey] || profiles.basketball;
}

function updateAnalysisFromSport(sportKey) {
  const result = generateAnalysisForSport(sportKey);
  movementQuality.textContent = result.movement;
  loadEfficiency.textContent = result.load;
  fatigueSignal.textContent = result.fatigue;
  priorityFix.textContent = result.priority;
  analysisNote.textContent = result.note;
}

analysisSport.addEventListener('change', (event) => {
  updateAnalysisFromSport(event.target.value);
});

videoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  previewVideo.src = url;
  previewVideo.style.display = 'block';

  const sportKey = analysisSport.value || 'basketball';
  updateAnalysisFromSport(sportKey);

  previewVideo.onloadeddata = () => {
    previewVideo.play().catch(() => {});
  };
});

renderSportPicker();
updateSportDashboard('basketball');
updateAnalysisFromSport('basketball');
analysisSport.value = 'basketball';

