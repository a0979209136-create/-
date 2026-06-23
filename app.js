const modules = [
  {
    id: "cell",
    title: "細胞與生命現象",
    tag: "basic",
    summary: "從細胞構造、物質進出、酵素與養分開始，建立所有生理作用的最小單位觀念。",
    skills: ["構造功能", "比較表", "顯微圖判讀"],
    checks: [
      ["基礎", "能指出細胞構造名稱，說出至少一個功能。"],
      ["精熟", "能比較動植物細胞，並解釋構造差異如何影響生命現象。"],
      ["素養", "能從顯微圖、食品保存或疾病情境判斷細胞膜與物質進出的關係。"]
    ],
    feedback: {
      "名詞混淆": "先做構造功能配對卡，再用一句話說明每個構造「做什麼」。",
      "圖像判讀": "回到顯微鏡倍率與視野題，練習先看比例尺、倍率、細胞數量。",
      "情境遷移": "把題幹圈成「現象、原因、證據」三欄，避免只靠關鍵字猜答案。"
    },
    quick: [
      ["基礎", "植物細胞比動物細胞多哪些常見構造？", "細胞壁、葉綠體、大型液泡。補強：用表格寫出構造與功能，不只背名稱。"],
      ["精熟", "為什麼鹽漬可保存某些食物？", "高濃度環境使微生物細胞失水，生長受抑制。補強：回到滲透作用與濃度差。"],
      ["素養", "若顯微鏡倍率增加，視野中的細胞數通常如何變化？", "視野變小，能看到的細胞數通常減少。補強：練倍率、視野大小與比例尺。"]
    ],
    tasks: [
      "畫出動植物細胞差異，標出細胞膜、細胞質、細胞核、葉綠體、粒線體、液泡功能。",
      "用例子說明擴散、滲透與主動運輸的差異。",
      "判讀顯微鏡倍率、視野大小與細胞數量的變化。",
      "完成一題細胞構造連到疾病或食品保存的情境題。"
    ]
  },
  {
    id: "body",
    title: "人體恆定與系統整合",
    tag: "graph",
    summary: "把消化、循環、呼吸、排泄、神經與內分泌串成恆定調節網，不再分章死背。",
    skills: ["因果鏈", "資料判讀", "系統整合"],
    checks: [
      ["基礎", "能說出各系統主要器官與功能。"],
      ["精熟", "能串連消化、循環、呼吸、排泄與恆定調節的因果鏈。"],
      ["素養", "能判讀運動、熱傷害、血糖或疾病情境中的數據變化。"]
    ],
    feedback: {
      "路徑不清": "先畫物質旅行路線圖，標出氧氣、二氧化碳、養分、尿素進出位置。",
      "調節概念弱": "用血糖與體溫各寫一個負回饋故事：刺激、受器、反應、結果。",
      "圖表判讀": "每張圖先讀座標軸與單位，再描述上升下降，最後才解釋原因。"
    },
    quick: [
      ["基礎", "小腸絨毛主要如何幫助消化系統？", "增加吸收表面積。補強：把構造特色連到功能。"],
      ["精熟", "運動時心跳與呼吸為何同時上升？", "肌肉細胞需要更多氧氣與養分，也要排出更多二氧化碳。補強：畫循環與呼吸的物質交換路線。"],
      ["素養", "高溫潮濕時為什麼較容易熱傷害？", "汗水不易蒸發，散熱效率下降。補強：把濕度、蒸發、體溫調節連成因果鏈。"]
    ],
    tasks: [
      "用箭頭圖整理養分、氧氣、二氧化碳與尿素在人體中的路徑。",
      "比較神經調節與激素調節的速度、作用範圍與例子。",
      "判讀血糖、心跳、呼吸速率或體溫變化圖。",
      "用運動、熬夜或中暑情境解釋恆定失衡。"
    ]
  },
  {
    id: "plants",
    title: "植物生理與環境反應",
    tag: "graph",
    summary: "聚焦光合作用、呼吸作用、蒸散作用與向性，練習控制變因與數據解釋。",
    skills: ["實驗設計", "變因控制", "圖表判讀"],
    checks: [
      ["基礎", "能分辨光合作用、呼吸作用、蒸散作用的條件與產物。"],
      ["精熟", "能用控制變因設計植物生理實驗。"],
      ["素養", "能用農業缺水、高溫或都市樹蔭情境解釋植物反應。"]
    ],
    feedback: {
      "作用混淆": "用反應物與產物重新整理三個作用，特別標出白天夜晚都會發生的作用。",
      "變因控制": "每題先寫操縱變因、應變變因、控制變因，沒有對照組就不能急著下結論。",
      "生活連結弱": "找一個校園植物例子，說明葉片、根、氣孔如何回應環境。"
    },
    quick: [
      ["基礎", "光合作用主要需要哪些原料？", "二氧化碳與水，並需要光能。補強：用反應物、產物、場所整理。"],
      ["精熟", "檢驗光照強度對光合作用的影響時，為何植物種類要相同？", "避免植物種類成為干擾變因。補強：每題先抓操縱、應變、控制變因。"],
      ["素養", "乾熱天氣下植物蒸散可能如何改變？", "水分供應不足時氣孔可能關閉，蒸散下降，也可能影響光合作用。補強：連結氣孔、水分與二氧化碳進出。"]
    ],
    tasks: [
      "整理光合作用與呼吸作用的反應物、產物、位置與時間。",
      "設計一個檢驗光照強度影響光合作用速率的實驗。",
      "判讀蒸散速率與溫度、濕度、風速、光照的關係。",
      "連結都市樹蔭、農業缺水或極端高溫的素養情境。"
    ]
  },
  {
    id: "genetics",
    title: "生殖、遺傳與生物技術",
    tag: "issue",
    summary: "從有性生殖、減數分裂、孟德爾遺傳到基因檢測，練習機率與倫理判斷。",
    skills: ["遺傳推論", "機率", "科技議題"],
    checks: [
      ["基礎", "能區分染色體、DNA、基因與性狀。"],
      ["精熟", "能用棋盤格推論子代基因型與表現型比例。"],
      ["素養", "能判斷基因檢測、親子鑑定或基因編輯題目中的證據與限制。"]
    ],
    feedback: {
      "層級混淆": "先畫由大到小的層級圖：細胞核、染色體、DNA、基因。",
      "比例推論": "每題固定寫親代配子，再填棋盤格，最後才換算比例。",
      "倫理判斷": "把科技題分成事實證據、可能風險、價值選擇三段回答。"
    },
    quick: [
      ["基礎", "基因和性狀的關係是什麼？", "基因影響性狀表現，但性狀也可能受環境影響。補強：整理染色體、DNA、基因、性狀層級。"],
      ["精熟", "Aa 和 aa 生下隱性表現型子代的機率是多少？", "50%。補強：先列親代配子 A、a 與 a，再填棋盤格。"],
      ["素養", "基因檢測結果能不能百分之百預測所有疾病？", "通常不能，許多疾病受多基因與環境共同影響。補強：分辨證據、風險與限制。"]
    ],
    tasks: [
      "比較有性與無性生殖的遺傳差異與適應優缺點。",
      "用棋盤格推論單基因性狀的親代、子代基因型與表現型比例。",
      "區分染色體、DNA、基因與性狀四個層級。",
      "討論基因檢測、基因編輯或生殖醫學題目中的證據與限制。"
    ]
  },
  {
    id: "evolution",
    title: "演化、分類與生物多樣性",
    tag: "basic",
    summary: "用證據看演化，用分類階層整理生物關係，避免把演化讀成單純故事。",
    skills: ["證據推論", "分類階層", "概念辨析"],
    checks: [
      ["基礎", "能說出分類階層與演化證據類型。"],
      ["精熟", "能用天擇解釋族群中性狀比例改變。"],
      ["素養", "能分析抗藥性、入侵種或棲地破碎化造成的族群變化。"]
    ],
    feedback: {
      "演化誤解": "重寫句子，把「個體變得更適應」改成「族群中有利性狀比例上升」。",
      "分類判斷": "練二分檢索表時，每一步只根據一個可觀察特徵做選擇。",
      "證據不足": "回答時補上資料來源，例如化石、分子序列或族群數量變化。"
    },
    quick: [
      ["基礎", "二分檢索表每一步應根據什麼判斷？", "明確、可觀察的特徵。補強：每次只用一個特徵做分支。"],
      ["精熟", "抗藥性細菌增加是個體改變還是族群比例改變？", "族群中原本具抗藥性個體的比例增加。補強：用天擇四步驟解釋。"],
      ["素養", "外來種一定會造成危害嗎？", "不一定，要看繁殖力、天敵、資源競爭與生態影響證據。補強：用資料支持結論。"]
    ],
    tasks: [
      "列出化石、同源構造、胚胎發育、分子證據各能支持什麼演化推論。",
      "用二分檢索表判斷未知生物分類。",
      "說明天擇不是生物主動改變，而是族群中有利性狀比例改變。",
      "連結抗藥性、入侵種或棲地破碎化情境。"
    ]
  },
  {
    id: "ecology",
    title: "生態系、能量與永續",
    tag: "issue",
    summary: "把族群、群集、生態系、食物網、能量塔與物質循環整合到環境議題。",
    skills: ["食物網", "能量流", "永續判斷"],
    checks: [
      ["基礎", "能分辨生產者、消費者、分解者與食物網方向。"],
      ["精熟", "能解釋能量遞減、物質循環與生物累積。"],
      ["素養", "能從污染、外來種或棲地改變資料推論生態系影響。"]
    ],
    feedback: {
      "角色混淆": "先標出生產者，再沿箭頭找能量流向，最後補分解者。",
      "能量物質混淆": "用一句話分清楚：能量單向流動且遞減，物質可循環再利用。",
      "永續推論": "練習寫「短期效果、長期風險、需要補充的資料」三項。"
    },
    quick: [
      ["基礎", "食物網箭頭通常代表什麼方向？", "能量與物質由被吃者流向吃者。補強：先找生產者再追箭頭。"],
      ["精熟", "為什麼高級消費者可利用的能量較少？", "能量在各營養階層轉移時會因代謝與熱散失而遞減。補強：畫能量塔。"],
      ["素養", "只看到某污染物濃度和魚類死亡同時上升，能直接證明因果嗎？", "不能，還需控制其他變因與更多證據。補強：區分相關與因果。"]
    ],
    tasks: [
      "畫出食物鏈、食物網與能量塔，說明能量遞減與物質循環差異。",
      "判讀族群數量變化圖，找出生物與非生物因子。",
      "分析污染、生物累積、外來種或棲地改變對食物網的影響。",
      "用一個台灣在地環境案例寫出可檢驗問題。"
    ]
  }
];

modules[0].semester = "七上";
modules[0].title = "第 1 章 生命世界、細胞與顯微鏡";
modules[0].summary = "認識生命現象、細胞構造、顯微鏡操作與物質進出，是後續生理作用的基礎。";
modules[1].semester = "七下";
modules[1].title = "第 5 章 人體的運輸、呼吸與排泄";
modules[1].summary = "整理循環、呼吸、排泄與物質運輸，建立人體系統整合概念。";
modules[2].semester = "七上";
modules[2].title = "第 3 章 植物的運輸與反應";
modules[2].summary = "聚焦植物體內水分、養分運輸，並連結蒸散、氣孔與環境反應。";
modules[3].semester = "七下";
modules[3].title = "第 8 章 遺傳與生物技術";
modules[3].summary = "從染色體、DNA、基因到孟德爾遺傳與基因科技，練習比例推論與素養判斷。";
modules[4].semester = "七下";
modules[4].title = "第 9 章 演化與生物分類";
modules[4].summary = "用天擇、演化證據、分類階層與二分檢索表整理生物關係。";
modules[5].semester = "七下";
modules[5].title = "第 10 章 生物與環境";
modules[5].summary = "整合族群、群集、生態系、食物網、能量流動、物質循環與永續議題。";

modules.splice(1, 0,
  {
    id: "nutrition",
    semester: "七上",
    title: "第 2 章 養分、酵素與光合作用",
    tag: "basic",
    summary: "理解養分種類、酵素作用、光合作用與呼吸作用，掌握能量如何進入生命系統。",
    skills: ["養分檢測", "酵素作用", "光合呼吸比較"],
    checks: [["基礎", "能分辨養分與功能。"], ["精熟", "能比較光合作用與呼吸作用。"], ["素養", "能判讀食物、植物或運動情境資料。"]],
    feedback: {
      "概念混淆": "先用表格整理養分、功能、檢測方式。",
      "作用比較弱": "把光合作用與呼吸作用分成反應物、產物、地點、時間比較。",
      "圖表判讀": "先看座標軸，再判斷變因與趨勢。"
    },
    quick: [],
    tasks: ["整理六大養分功能。", "比較光合作用與呼吸作用。", "練習酵素活性圖表。", "完成一題食物或植物情境題。"]
  },
  {
    id: "digestion",
    semester: "七上",
    title: "第 4 章 人體的營養與消化",
    tag: "basic",
    summary: "聚焦消化器官、消化液、養分吸收與小腸構造功能，連結健康飲食與生活情境。",
    skills: ["構造功能", "消化路徑", "養分吸收"],
    checks: [["基礎", "能說出消化器官功能。"], ["精熟", "能解釋消化與吸收差異。"], ["素養", "能分析飲食或疾病情境。"]],
    feedback: {
      "器官功能弱": "先畫消化道順序，逐一標功能。",
      "吸收概念弱": "把小腸絨毛和表面積連起來。",
      "生活連結弱": "用飲食案例練習養分與健康判斷。"
    },
    quick: [],
    tasks: ["畫消化道流程。", "整理消化液作用。", "說明小腸絨毛功能。", "完成一題飲食情境題。"]
  },
  {
    id: "coordination",
    semester: "七下",
    title: "第 6 章 神經、內分泌與恆定",
    tag: "graph",
    summary: "理解神經調節、激素調節、血糖與體溫恆定，建立人體調節系統的因果鏈。",
    skills: ["負回饋", "神經激素比較", "資料判讀"],
    checks: [["基礎", "能比較神經與內分泌。"], ["精熟", "能用負回饋解釋恆定。"], ["素養", "能判讀血糖、體溫或熱傷害情境。"]],
    feedback: {
      "調節概念弱": "用刺激、受器、反應、結果整理負回饋。",
      "比較不清": "用速度、範圍、持續時間比較神經與激素。",
      "資料判讀": "先描述圖形變化，再解釋原因。"
    },
    quick: [],
    tasks: ["比較神經與激素調節。", "畫血糖負回饋流程。", "判讀體溫或血糖圖。", "完成熱傷害素養題。"]
  },
  {
    id: "reproduction",
    semester: "七下",
    title: "第 7 章 生殖與發育",
    tag: "basic",
    summary: "比較有性與無性生殖，理解生殖細胞、受精、胚胎發育與生命延續。",
    skills: ["有性無性比較", "生殖細胞", "生命週期"],
    checks: [["基礎", "能分辨有性與無性生殖。"], ["精熟", "能說明減數分裂與受精意義。"], ["素養", "能連結生殖醫學或生命教育議題。"]],
    feedback: {
      "比較混淆": "先列有無配子、有無遺傳變異。",
      "過程不熟": "用流程圖整理配子、受精、胚胎發育。",
      "議題判斷弱": "先分清楚事實、風險與價值選擇。"
    },
    quick: [],
    tasks: ["比較有性與無性生殖。", "整理生殖細胞與受精。", "說明減數分裂意義。", "完成一題生命議題題。"]
  }
);

const moduleOrder = {
  cell: 1,
  nutrition: 2,
  plants: 3,
  digestion: 4,
  body: 5,
  coordination: 6,
  reproduction: 7,
  genetics: 8,
  evolution: 9,
  ecology: 10
};

modules.forEach((module) => {
  module.order = moduleOrder[module.id] || 99;
});

const chapterStudyContent = {
  cell: {
    memory: "細胞像一座小城市：細胞膜是城門，細胞核是市政府，粒線體是發電廠，葉綠體是太陽能板，液泡是倉庫。",
    map: ["生命現象", "顯微鏡", "細胞構造", "物質進出", "構造功能比較"],
    exam: ["動植物細胞差異", "倍率變大視野變小", "滲透作用與生活情境", "構造功能配對"],
    solve: "看到細胞題先圈構造，再問自己：這個構造的功能是控制、製造能量、儲存，還是行光合作用？"
  },
  nutrition: {
    memory: "養分像補給站：醣類快能量，脂質長期能量，蛋白質修補身體；酵素像鑰匙，只開特定反應的門。",
    map: ["六大養分", "養分檢測", "酵素", "光合作用", "呼吸作用"],
    exam: ["光合作用與呼吸作用比較", "酵素受溫度與酸鹼影響", "碘液、本氏液等檢測", "能量來源判斷"],
    solve: "遇到作用比較題，用四格表：地點、反應物、產物、發生時間，避免只背口訣。"
  },
  plants: {
    memory: "植物像水管大樓：根吸水，莖運輸，葉蒸散；氣孔像窗戶，開關會影響水分與二氧化碳。",
    map: ["根莖葉", "水分運輸", "蒸散作用", "氣孔", "植物向性"],
    exam: ["蒸散速率圖表", "氣孔開閉與光合作用", "控制變因實驗", "植物對環境刺激的反應"],
    solve: "植物題先判斷是在問水、氣體、光，還是刺激反應，再找對應構造。"
  },
  digestion: {
    memory: "消化像食物拆解線：口腔開始，胃攪拌，小腸吸收，大腸回收水分。",
    map: ["消化道順序", "消化液", "養分分解", "小腸吸收", "飲食健康"],
    exam: ["器官功能", "消化與吸收差異", "小腸絨毛增加表面積", "養分與健康情境"],
    solve: "看到消化題先畫食物流向，再判斷題目問的是分解、吸收，還是運輸。"
  },
  body: {
    memory: "人體像物流網：消化取得養分，呼吸取得氧氣，循環負責運送，排泄清除廢物。",
    map: ["循環系統", "呼吸系統", "排泄系統", "物質運輸", "系統整合"],
    exam: ["血液運送物質", "肺泡氣體交換", "腎臟形成尿液", "運動時系統合作"],
    solve: "人體系統題用物質追蹤法：氧氣、二氧化碳、養分、尿素分別從哪裡來、到哪裡去。"
  },
  coordination: {
    memory: "神經像即時訊息，激素像廣播；恆定像自動空調，偏高就降、偏低就升。",
    map: ["受器", "神經傳導", "內分泌", "負回饋", "血糖與體溫"],
    exam: ["神經與激素比較", "血糖調節", "體溫調節", "圖表判讀與因果"],
    solve: "恆定題固定找四件事：刺激、調節者、反應、結果是否讓變化變小。"
  },
  reproduction: {
    memory: "無性生殖像影印，有性生殖像混合牌組；減數分裂先減半，受精後恢復成一套完整牌。",
    map: ["無性生殖", "有性生殖", "生殖細胞", "受精", "發育"],
    exam: ["有性與無性比較", "配子染色體數減半", "受精意義", "生命倫理情境"],
    solve: "生殖題先判斷有沒有配子和受精，再判斷子代是否有遺傳變異。"
  },
  genetics: {
    memory: "遺傳像說明書：染色體是書架，DNA 是書，基因是句子，性狀是讀出來的結果。",
    map: ["染色體", "DNA", "基因", "孟德爾遺傳", "生物技術"],
    exam: ["顯隱性判斷", "棋盤格比例", "基因與環境", "基因檢測限制"],
    solve: "遺傳比例題不要心算，先列親代配子，再畫棋盤格，最後數表現型。"
  },
  evolution: {
    memory: "演化不是個體想改變，而是族群中某些特徵比較容易留下來；分類像整理資料夾。",
    map: ["演化證據", "天擇", "族群比例", "分類階層", "二分檢索"],
    exam: ["抗藥性與天擇", "演化證據判斷", "分類階層", "二分檢索表操作"],
    solve: "演化題避免寫個體主動改變，要改寫成族群中有利性狀比例上升。"
  },
  ecology: {
    memory: "生態系像一張網：能量沿食物鏈單向流，物質在環境與生物間循環。",
    map: ["族群", "群集", "食物網", "能量流動", "物質循環與永續"],
    exam: ["食物網方向", "能量塔", "生物累積", "外來種與棲地破壞"],
    solve: "生態題先找生產者，再沿箭頭看能量方向，最後判斷哪個族群會增加或減少。"
  }
};

modules.forEach((module) => {
  Object.assign(module, chapterStudyContent[module.id] || {});
});

const issues = [
  {
    id: "dengue",
    moduleId: "ecology",
    chapter: "第 10 章 生物與環境",
    title: "登革熱與病媒蚊防治",
    concept: "生物防治、族群成長、生活史、公共衛生",
    context: "豪雨、高溫與積水容器會影響病媒蚊繁殖。題目常給溫度、降雨、清除孳生源前後的數據，要求判斷最有效的防治策略。",
    prompts: ["哪一個變因最可能影響幼蟲數量？", "若只噴藥而不清積水，資料可能出現什麼限制？", "如何設計對照組評估防治成效？"]
  },
  {
    id: "amr",
    moduleId: "evolution",
    chapter: "第 9 章 演化與生物分類",
    title: "抗生素抗藥性",
    concept: "天擇、突變、族群比例、醫藥倫理",
    context: "抗生素不會讓個體努力變強，而是篩選出原本具有抗藥性差異的細菌，使抗藥性比例上升。",
    prompts: ["題幹中的抗藥性是個體改變還是族群比例改變？", "為什麼未完成療程可能增加抗藥性風險？", "哪種資料能支持天擇解釋？"]
  },
  {
    id: "heat",
    moduleId: "coordination",
    chapter: "第 6 章 神經、內分泌與恆定",
    title: "熱傷害與人體恆定",
    concept: "體溫調節、神經內分泌、循環與排汗",
    context: "極端高溫下，人體透過皮膚血管擴張與排汗散熱；若水分與電解質失衡，可能影響循環和神經功能。",
    prompts: ["體溫上升時，哪些反應有助散熱？", "運動飲料與白開水的使用情境差在哪裡？", "如何判讀濕度對排汗散熱效果的影響？"]
  },
  {
    id: "microplastics",
    moduleId: "ecology",
    chapter: "第 10 章 生物與環境",
    title: "微塑膠與食物網",
    concept: "生物累積、食物網、消化與排泄",
    context: "微塑膠可能經攝食進入生物體，題目會要求學生依食物網位置、攝食量與排出能力推論風險。",
    prompts: ["食物網越高層一定濃度越高嗎？還需要哪些證據？", "如何區分相關與因果？", "採樣地點與樣本數會怎樣影響結論？"]
  },
  {
    id: "coral",
    moduleId: "nutrition",
    chapter: "第 2 章 養分、酵素與光合作用",
    title: "珊瑚白化與共生藻",
    concept: "共生、光合作用、溫度壓力、生態系",
    context: "珊瑚白化可連到共生藻離開、光合作用產物減少、棲地功能下降與海洋生物多樣性。",
    prompts: ["白化代表珊瑚一定死亡嗎？", "溫度、光照與水質如何分別設計實驗檢驗？", "生態系中哪些生物會受到間接影響？"]
  },
  {
    id: "cell-meat",
    moduleId: "cell",
    chapter: "第 1 章 生命世界、細胞與顯微鏡",
    title: "培養肉與細胞培養",
    concept: "細胞、組織培養、營養需求、科技倫理",
    context: "培養肉新聞常提到動物細胞在培養液中增生。題目可要求學生判斷細胞需要的養分、無菌條件與產業化限制。",
    prompts: ["培養細胞需要哪些基本條件？", "這項科技能完全取代畜牧嗎？還需要哪些證據？", "如何分辨新聞中的事實、推論與價值判斷？"]
  },
  {
    id: "enzyme-detergent",
    moduleId: "nutrition",
    chapter: "第 2 章 養分、酵素與光合作用",
    title: "酵素洗衣精為何怕高溫",
    concept: "酵素活性、溫度、蛋白質變性、控制變因",
    context: "廣告宣稱酵素可分解污漬，但溫度太高可能讓酵素失去活性。可設計實驗比較不同溫度下去污效果。",
    prompts: ["操縱變因和應變變因分別是什麼？", "為什麼每組布料和污漬要相同？", "酵素不是萬能，哪些污漬可能效果不同？"]
  },
  {
    id: "vertical-farm",
    moduleId: "plants",
    chapter: "第 3 章 植物的運輸與反應",
    title: "垂直農場與 LED 種菜",
    concept: "光合作用、植物向性、水分運輸、變因控制",
    context: "室內農場調整光色、光照時間、水分與養分供應。題目可要求學生判斷哪個條件影響光合作用或蒸散。",
    prompts: ["若只改 LED 光色，哪些條件要控制？", "植物長得快是否一定代表營養價值高？", "如何用資料判斷水分利用效率？"]
  },
  {
    id: "gut-microbiome",
    moduleId: "digestion",
    chapter: "第 4 章 人體的營養與消化",
    title: "腸道菌與飲食健康",
    concept: "消化吸收、菌相、膳食纖維、相關與因果",
    context: "新聞常說腸道菌會影響健康，但許多研究只能指出相關。學生需判斷樣本、控制變因與結論限制。",
    prompts: ["菌相差異能不能直接證明飲食造成疾病？", "膳食纖維和大腸功能可如何連結？", "研究若只調查少數人，推論有什麼限制？"]
  },
  {
    id: "air-pollution",
    moduleId: "body",
    chapter: "第 5 章 人體的運輸、呼吸與排泄",
    title: "空氣污染與肺泡交換",
    concept: "呼吸系統、肺泡、循環運輸、健康風險",
    context: "細懸浮微粒可能影響呼吸道與心血管健康。題目可要求學生把肺泡交換、血液運輸與數據風險串起來。",
    prompts: ["肺泡的哪些構造有利氣體交換？", "污染濃度和就醫人數同時上升能直接證明因果嗎？", "哪些族群可能需要更小心？"]
  },
  {
    id: "sleep-hormone",
    moduleId: "coordination",
    chapter: "第 6 章 神經、內分泌與恆定",
    title: "熬夜、褪黑激素與學習",
    concept: "神經調節、內分泌、恆定、生活型態",
    context: "睡眠不足會影響注意力與記憶。學生可從神經傳導、激素節律與實驗設計判斷健康建議是否合理。",
    prompts: ["褪黑激素屬於哪一類調節？", "如何設計調查避免只靠自我感覺？", "睡眠和成績相關不等於什麼？"]
  },
  {
    id: "ivf",
    moduleId: "reproduction",
    chapter: "第 7 章 生殖與發育",
    title: "試管嬰兒與生殖醫學",
    concept: "配子、受精、胚胎發育、倫理議題",
    context: "生殖醫學可連結卵、精子、體外受精與胚胎著床，也需要討論醫療風險與倫理選擇。",
    prompts: ["體外受精和自然受精相同與不同處是什麼？", "哪些是生物事實，哪些是價值判斷？", "新聞中的成功率應如何解讀？"]
  },
  {
    id: "crispr",
    moduleId: "genetics",
    chapter: "第 8 章 遺傳與生物技術",
    title: "CRISPR 基因編輯",
    concept: "DNA、基因、性狀、科技限制與倫理",
    context: "基因編輯可修改特定 DNA 片段，但性狀不一定只由單一基因決定。題目會要求學生判斷證據、風險與限制。",
    prompts: ["基因、DNA、染色體的層級怎麼排？", "單一基因改變一定會改變整個性狀嗎？", "醫療用途和增強用途的討論差在哪裡？"]
  },
  {
    id: "biodiversity-ai",
    moduleId: "evolution",
    chapter: "第 9 章 演化與生物分類",
    title: "AI 辨識物種與公民科學",
    concept: "分類階層、二分檢索、資料偏誤、生物多樣性",
    context: "手機 App 可協助辨識物種，但模型可能受訓練資料影響。學生需比較 AI 建議、可觀察特徵與檢索表證據。",
    prompts: ["AI 判斷和二分檢索表各有什麼優缺點？", "照片角度或資料偏誤會如何影響結果？", "如何用多個特徵提高辨識可信度？"]
  }
];

const quiz = [
  {
    q: "顯微鏡下看到某細胞有細胞壁與葉綠體，最可能是哪一類細胞？",
    options: ["動物表皮細胞", "植物葉肉細胞", "人體口腔細胞", "細菌細胞"],
    answer: 1,
    chapter: "細胞與生命現象",
    concept: "動植物細胞構造",
    type: "基礎概念",
    hint: "先確認構造，再判斷細胞類型。"
  },
  {
    q: "鹽漬蔬菜能保存較久，主要與哪一個細胞概念有關？",
    options: ["滲透作用", "光合作用", "神經傳導", "有性生殖"],
    answer: 0,
    chapter: "細胞與生命現象",
    concept: "滲透作用與濃度差",
    type: "生活情境",
    hint: "高濃度環境會影響水分移動。"
  },
  {
    q: "顯微鏡倍率由 100 倍改成 400 倍，通常視野會如何改變？",
    options: ["變大且細胞變小", "變小且細胞變大", "完全不變", "只能看到細胞核"],
    answer: 1,
    chapter: "細胞與生命現象",
    concept: "顯微鏡倍率與視野",
    type: "圖像判讀",
    hint: "倍率越高，視野通常越小。"
  },
  {
    q: "運動時心跳和呼吸加快，最直接是為了供應細胞更多什麼？",
    options: ["氧氣與養分", "尿素與二氧化碳", "汗水與鹽分", "抗體與血小板"],
    answer: 0,
    chapter: "人體恆定與系統整合",
    concept: "呼吸循環與細胞呼吸",
    type: "系統整合",
    hint: "先想肌肉細胞需要什麼進行作用。"
  },
  {
    q: "飯後血糖升高，胰島素分泌增加，使血糖下降。這屬於哪一概念？",
    options: ["食物鏈", "負回饋調節", "無性生殖", "生物累積"],
    answer: 1,
    chapter: "人體恆定與系統整合",
    concept: "血糖恆定與負回饋",
    type: "基礎概念",
    hint: "結果會讓原本的變化變小。"
  },
  {
    q: "高溫潮濕時，人體排汗卻不容易降溫，主要因為？",
    options: ["汗水較難蒸發帶走熱量", "血液停止流動", "肺部不再交換氣體", "細胞核消失"],
    answer: 0,
    chapter: "人體恆定與系統整合",
    concept: "體溫調節與排汗",
    type: "生活情境",
    hint: "排汗降溫靠的是蒸發。"
  },
  {
    q: "植物放在密閉透明箱中照光，二氧化碳濃度下降，最直接表示哪一作用較強？",
    options: ["光合作用", "呼吸作用", "蒸散作用", "滲透作用"],
    answer: 0,
    chapter: "植物生理與環境反應",
    concept: "光合作用反應物",
    type: "資料判讀",
    hint: "二氧化碳是光合作用的原料。"
  },
  {
    q: "若要檢驗光照強度對光合作用速率的影響，最應控制的是？",
    options: ["只改變光照強度，其他條件盡量相同", "同時改變溫度與水量", "每組使用不同植物種類", "只觀察一次就下結論"],
    answer: 0,
    chapter: "植物生理與環境反應",
    concept: "控制變因",
    type: "實驗設計",
    hint: "一次只改一個主要變因。"
  },
  {
    q: "乾熱環境下植物氣孔關閉，最可能先影響哪一件事？",
    options: ["二氧化碳進入葉片", "根吸收礦物質", "花粉形成", "種子萌芽"],
    answer: 0,
    chapter: "植物生理與環境反應",
    concept: "氣孔與氣體交換",
    type: "因果推論",
    hint: "氣孔是氣體進出葉片的重要通道。"
  },
  {
    q: "親代基因型皆為 Aa，若 A 為顯性，子代表現型顯性比例約為？",
    options: ["0%", "25%", "50%", "75%"],
    answer: 3,
    chapter: "生殖、遺傳與生物技術",
    concept: "孟德爾遺傳比例",
    type: "計算推論",
    hint: "先畫棋盤格。"
  },
  {
    q: "基因檢測能預測某些疾病風險，但不能保證一定發病，主要因為？",
    options: ["性狀可能受多基因與環境影響", "DNA 不存在細胞中", "所有疾病都是單一基因決定", "環境不會影響生物"],
    answer: 0,
    chapter: "生殖、遺傳與生物技術",
    concept: "基因與環境共同影響",
    type: "素養情境",
    hint: "風險不等於必然結果。"
  },
  {
    q: "減數分裂對有性生殖最重要的意義是？",
    options: ["讓配子染色體數減半", "讓細胞無限變大", "讓所有子代完全相同", "讓植物停止光合作用"],
    answer: 0,
    chapter: "生殖、遺傳與生物技術",
    concept: "減數分裂與配子",
    type: "基礎概念",
    hint: "受精後染色體數才能恢復。"
  },
  {
    q: "抗生素使用後抗藥性細菌比例增加，最合理的解釋是？",
    options: ["細菌為了生存主動產生抗藥性", "抗生素篩選使抗藥性個體比例增加", "所有細菌都停止繁殖", "抗生素改變了人類基因"],
    answer: 1,
    chapter: "演化、分類與生物多樣性",
    concept: "天擇與族群比例",
    type: "素養情境",
    hint: "天擇改變的是族群比例。"
  },
  {
    q: "使用二分檢索表辨識生物時，每一步最應依據什麼？",
    options: ["明確可觀察的特徵", "生物可不可愛", "猜測牠的年齡", "查不到就跳過全部步驟"],
    answer: 0,
    chapter: "演化、分類與生物多樣性",
    concept: "二分檢索表",
    type: "方法理解",
    hint: "每一步只根據特徵分支。"
  },
  {
    q: "外來種不一定造成危害，判斷時最需要哪種資料？",
    options: ["族群擴散與對原生種影響", "牠名字好不好聽", "牠是否被拍成影片", "牠是否顏色鮮豔"],
    answer: 0,
    chapter: "演化、分類與生物多樣性",
    concept: "外來種與生態影響",
    type: "資料判讀",
    hint: "判斷危害要看證據。"
  },
  {
    q: "食物鏈中能量由生產者傳到高級消費者時，通常會如何變化？",
    options: ["逐級增加", "逐級減少", "完全不變", "只在夜晚流動"],
    answer: 1,
    chapter: "生態系、能量與永續",
    concept: "能量流動",
    type: "基礎概念",
    hint: "能量轉移會有散失。"
  },
  {
    q: "污染物在食物網中越往高階消費者累積，稱為什麼？",
    options: ["生物累積", "蒸散作用", "負回饋", "減數分裂"],
    answer: 0,
    chapter: "生態系、能量與永續",
    concept: "生物累積",
    type: "概念辨識",
    hint: "想想食物網層級與污染物濃度。"
  },
  {
    q: "某研究只調查一條河川一天中的微塑膠濃度，最應提醒學生注意哪件事？",
    options: ["樣本範圍有限，不能過度推論", "數據一定是假的", "只要有圖就能證明因果", "不需考慮採樣方法"],
    answer: 0,
    chapter: "生態系、能量與永續",
    concept: "樣本與推論限制",
    type: "科學閱讀",
    hint: "樣本太少時，結論要保守。"
  }
];

quiz.forEach((item) => {
  item.source = "自製仿題；參考國中教育會考自然科與各校段考常見命題方向，未重製原題。";
  item.explain = item.explain || `本題考的是「${item.concept}」。作答時先抓題幹線索，再連回課本核心概念：${item.hint}`;
});

const roster = [
  { grade: 8, cls: "801", name: "林品妤", xp: 760, before: 68, after: 84, gain: 16, tier: "A", progress: 88, weak: "遺傳", mastery: [92, 84, 76, 64, 88, 80] },
  { grade: 8, cls: "801", name: "陳冠宇", xp: 690, before: 51, after: 75, gain: 24, tier: "B", progress: 76, weak: "植物", mastery: [78, 82, 58, 70, 74, 68] },
  { grade: 8, cls: "802", name: "黃昱晴", xp: 640, before: 58, after: 74, gain: 16, tier: "B", progress: 72, weak: "生態", mastery: [74, 70, 72, 68, 65, 52] },
  { grade: 8, cls: "802", name: "吳承恩", xp: 430, before: 29, after: 57, gain: 28, tier: "C", progress: 51, weak: "細胞", mastery: [42, 56, 60, 48, 58, 54] },
  { grade: 8, cls: "803", name: "張庭瑋", xp: 390, before: 35, after: 50, gain: 15, tier: "C", progress: 47, weak: "人體", mastery: [58, 40, 54, 46, 52, 50] },
  { grade: 9, cls: "901", name: "李佳穎", xp: 910, before: 72, after: 91, gain: 19, tier: "A", progress: 94, weak: "植物", mastery: [94, 90, 74, 88, 86, 92] },
  { grade: 9, cls: "901", name: "王柏翰", xp: 820, before: 75, after: 87, gain: 12, tier: "A", progress: 86, weak: "演化", mastery: [88, 84, 82, 80, 70, 78] },
  { grade: 9, cls: "902", name: "蔡宥真", xp: 700, before: 46, after: 78, gain: 32, tier: "B", progress: 78, weak: "遺傳", mastery: [80, 76, 74, 56, 72, 70] },
  { grade: 9, cls: "902", name: "鄭宇翔", xp: 520, before: 31, after: 60, gain: 29, tier: "C", progress: 58, weak: "生態", mastery: [66, 58, 62, 54, 60, 44] },
  { grade: 9, cls: "903", name: "許芷安", xp: 470, before: 38, after: 58, gain: 20, tier: "C", progress: 55, weak: "人體", mastery: [60, 46, 58, 50, 62, 56] }
];

const chapterNames = ["細胞", "人體", "植物", "遺傳", "演化", "生態"];
const schoolClasses = {
  yixue: {
    name: "新北市立義學國中",
    grade8: Array.from({ length: 16 }, (_, index) => `${801 + index}`),
    grade9: Array.from({ length: 19 }, (_, index) => `${901 + index}`)
  },
  national: {
    name: "全國開放版",
    grade8: ["七升八開放班"],
    grade9: ["八升九開放班"]
  }
};

const weeklyReadings = [
  {
    week: "本週",
    title: "病媒蚊監測與登革熱防治",
    chapter: "第 9 章演化與分類、第 10 章生物與環境",
    source: "衛生福利部疾病管制署",
    url: "https://www.cdc.gov.tw/",
    evidenceType: "官方衛生新聞與疾病資訊",
    journalSource: "可延伸查詢：International Journal of Infectious Diseases 等蚊媒傳染病研究期刊",
    sourceNote: "此卡片使用官方疾病資訊作為新聞出處，並以期刊研究方向補充科學閱讀脈絡。",
    summary: "登革熱防治可連結病媒蚊生活史、族群數量、環境因子與公共衛生。閱讀時請注意資料如何支持防治策略。",
    prompts: [
      "這則時事跟哪一個生物概念有關？",
      "資料中哪個證據支持防治做法？",
      "如果要設計實驗或調查，還需要收集什麼資料？",
      "你想到哪一個校園或社區防治做法？"
    ]
  }
];

const stateKey = "bio-cap-review-progress";
const staffAccessKey = "bio-cap-review-staff-access";
const weeklyCommentsKey = "bio-cap-review-weekly-comments";
const feedbackInboxKey = "bio-cap-review-student-feedback";
const completed = new Set(JSON.parse(localStorage.getItem(stateKey) || "[]"));
const studentIdRule = {
  length: 6,
  allowedPrefixes: []
};
const studentDirectory = [
  // 正式上線時由學校端每年匯入雲端表格後同步到這裡或後端資料庫。
  // 欄位建議：schoolYear, grade, classNo, seatNo, studentId, name, email, active。
];

const moduleGrid = document.querySelector("#moduleGrid");
const progressBar = document.querySelector("#progressBar");
const progressLabel = document.querySelector("#progressLabel");
const doneCount = document.querySelector("#doneCount");
const checkCount = document.querySelector("#checkCount");

function renderModules(filter = "all") {
  moduleGrid.innerHTML = "";
  modules
    .slice()
    .sort((a, b) => a.order - b.order)
    .filter((module) => filter === "all" || module.tag === filter || filter === `sem-${module.semester}`)
    .forEach((module) => {
      const article = document.createElement("article");
      article.className = "module-card";
      article.innerHTML = `
        <header>
          <div>
            <h3>${module.title}</h3>
            <p>${module.summary}</p>
          </div>
          <span class="tag">${module.semester}・${tagName(module.tag)}</span>
        </header>
        <div class="skills">${module.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        <div class="chapter-study">
          <section class="memory-card">
            <strong>圖像記憶</strong>
            <p>${module.memory}</p>
          </section>
          <section>
            <strong>學習地圖</strong>
            <div class="concept-chain">
              ${module.map.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>
          <section>
            <strong>常考重點</strong>
            <ul>
              ${module.exam.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
          <section class="solve-card">
            <strong>解析方法</strong>
            <p>${module.solve}</p>
          </section>
        </div>
        <div class="task-list">
          ${module.tasks.map((task, index) => {
            const id = `${module.id}-${index}`;
            return `<label><input type="checkbox" data-task="${id}" ${completed.has(id) ? "checked" : ""}><span>${task}</span></label>`;
          }).join("")}
        </div>
        <section class="assessment" aria-label="${module.title}形成性評量">
          <h4>章末形成性評量</h4>
          <div class="level-checks">
            ${module.checks.map(([level, text]) => `
              <div class="level-check">
                <strong>${level}</strong>
                <p>${text}</p>
              </div>
            `).join("")}
          </div>
          <h4>章節快問與回饋</h4>
          <div class="quick-checks">
            ${module.quick.map(([level, question, answer]) => `
              <details>
                <summary>${level}題：${question}</summary>
                <p>${answer}</p>
              </details>
            `).join("")}
          </div>
          <div class="module-feedback">
            <strong>後設認知回饋</strong>
            <label>
              <span>我目前最卡的是</span>
              <select data-feedback="${module.id}">
                <option value="">選擇弱點，取得加強建議</option>
                ${Object.keys(module.feedback).map((key) => `<option value="${key}">${key}</option>`).join("")}
              </select>
            </label>
            <div class="feedback-output" id="feedback-${module.id}" hidden></div>
          </div>
        </section>
      `;
      moduleGrid.appendChild(article);
    });
}

function tagName(tag) {
  return {
    basic: "基礎補強",
    graph: "圖表判讀",
    issue: "議題素養"
  }[tag];
}

function updateProgress() {
  const total = modules.reduce((sum, module) => sum + module.tasks.length, 0);
  const done = completed.size;
  const percent = Math.round((done / total) * 100);
  const fullyChecked = modules.filter((module) => module.tasks.every((_, index) => completed.has(`${module.id}-${index}`))).length;
  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `${percent}%`;
  doneCount.textContent = String(done);
  checkCount.textContent = String(fullyChecked);
  localStorage.setItem(stateKey, JSON.stringify([...completed]));
}

document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderModules(button.dataset.filter);
  });
});

moduleGrid.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-task]");
  const feedbackSelect = event.target.closest("[data-feedback]");
  if (checkbox) {
    if (checkbox.checked) {
      completed.add(checkbox.dataset.task);
    } else {
      completed.delete(checkbox.dataset.task);
    }
    updateProgress();
  }
  if (feedbackSelect) {
    const module = modules.find((item) => item.id === feedbackSelect.dataset.feedback);
    const output = document.querySelector(`#feedback-${module.id}`);
    if (!feedbackSelect.value) {
      output.hidden = true;
      output.innerHTML = "";
      return;
    }
    output.hidden = false;
    output.innerHTML = `
      <p><strong>補強建議：</strong>${module.feedback[feedbackSelect.value]}</p>
      <p><strong>後設認知提問：</strong>我剛剛答題時，是缺概念、看錯資料，還是無法把概念用到新情境？下一題我要先做哪一步？</p>
    `;
  }
});

const issueList = document.querySelector("#issueList");
const issueDetail = document.querySelector("#issueDetail");

function renderIssues(activeModuleId = modules[0].id, activeId = "") {
  const orderedModules = modules.slice().sort((a, b) => a.order - b.order);
  const moduleIssues = issues.filter((issue) => issue.moduleId === activeModuleId);
  const activeIssue = moduleIssues.find((issue) => issue.id === activeId) || moduleIssues[0] || issues[0];
  issueList.innerHTML = orderedModules.map((module) => {
    const count = issues.filter((issue) => issue.moduleId === module.id).length;
    return `
    <button class="issue-tab ${module.id === activeModuleId ? "active" : ""}" data-module-issue="${module.id}" type="button">
      <strong>${module.title}</strong><br>
      <small>${count} 則素養議題</small>
    </button>
  `;
  }).join("");
  const issueCards = moduleIssues.map((issue) => `
    <button class="issue-pill ${issue.id === activeIssue.id ? "active" : ""}" data-issue="${issue.id}" type="button">${issue.title}</button>
  `).join("");
  issueDetail.innerHTML = `
    <p class="eyebrow">情境題素材</p>
    <h3>${activeIssue.chapter}</h3>
    <div class="issue-pills">${issueCards || "<span>本章議題建置中。</span>"}</div>
    <h4>${activeIssue.title}</h4>
    <p><strong>可連結概念：</strong>${activeIssue.concept}</p>
    <p>${activeIssue.context}</p>
    <div class="prompt-grid">
      ${activeIssue.prompts.map((prompt, index) => `
        <div>
          <strong>提問 ${index + 1}</strong>
          <p>${prompt}</p>
        </div>
      `).join("")}
    </div>
  `;
}

issueList.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-module-issue]");
  if (tab) renderIssues(tab.dataset.moduleIssue);
});

issueDetail.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-issue]");
  if (tab) {
    const issue = issues.find((item) => item.id === tab.dataset.issue);
    renderIssues(issue.moduleId, issue.id);
  }
});

const quizForm = document.querySelector("#quizForm");
const quizResult = document.querySelector("#quizResult");
const recheckForm = document.querySelector("#recheckForm");
const recheckResult = document.querySelector("#recheckResult");
const notesContent = document.querySelector("#notesContent");
const generatedNotes = document.querySelector("#generated-notes");
const recheckSection = document.querySelector("#recheck");
let latestDiagnosis = null;

function moduleForQuestion(item) {
  if (item.concept.includes("血糖") || item.concept.includes("體溫") || item.concept.includes("排汗")) return modules.find((module) => module.id === "coordination");
  if (item.concept.includes("減數") || item.concept.includes("配子")) return modules.find((module) => module.id === "reproduction");
  if (item.chapter.includes("細胞")) return modules.find((module) => module.id === "cell");
  if (item.chapter.includes("植物")) return modules.find((module) => module.id === "plants");
  if (item.chapter.includes("人體")) return modules.find((module) => module.id === "body");
  if (item.chapter.includes("遺傳") || item.concept.includes("基因") || item.concept.includes("孟德爾")) return modules.find((module) => module.id === "genetics");
  if (item.chapter.includes("演化") || item.concept.includes("檢索") || item.concept.includes("外來種")) return modules.find((module) => module.id === "evolution");
  if (item.chapter.includes("生態") || item.concept.includes("能量") || item.concept.includes("累積")) return modules.find((module) => module.id === "ecology");
  return modules[0];
}

function diagnosisFocusItems() {
  if (!latestDiagnosis) return [];
  const targets = [...latestDiagnosis.missed, ...latestDiagnosis.guessedCorrect];
  const fallback = latestDiagnosis.score === quiz.length ? quiz.slice(0, 3) : quiz.slice(0, 4);
  return targets.length ? targets : fallback;
}

function uniqueFocusModules() {
  const seen = new Set();
  return diagnosisFocusItems()
    .map(moduleForQuestion)
    .filter((module) => {
      if (!module || seen.has(module.id)) return false;
      seen.add(module.id);
      return true;
    });
}

function studyAdviceForBand() {
  if (!latestDiagnosis) return "";
  if (latestDiagnosis.abilityBand.name.includes("A")) {
    return "請把重點放在跨章節題組：每題都要能說出題幹證據、排除錯選項的理由，以及是否能推廣到其他情境。";
  }
  if (latestDiagnosis.abilityBand.name.includes("B")) {
    return "請先補錯題對應概念，再重做同類題。讀筆記時用手指著心智圖說一次因果鏈，確認自己不是只看過。";
  }
  return "請先抓核心圖像與名詞功能，不急著追求難題。每次只補 1 到 2 個概念，答對同類題後再前進。";
}

function visualAnalogy(module) {
  return {
    cell: ["城門", "市政府", "發電廠", "太陽能板"],
    nutrition: ["補給站", "鑰匙", "太陽能", "能量"],
    plants: ["根吸水", "莖運輸", "葉蒸散", "氣孔窗戶"],
    digestion: ["入口", "拆解", "吸收", "回收水"],
    body: ["取得", "運送", "交換", "清除"],
    coordination: ["刺激", "調節", "反應", "恢復"],
    reproduction: ["配子", "受精", "發育", "變異"],
    genetics: ["親代", "配子", "棋盤格", "比例"],
    evolution: ["差異", "環境", "篩選", "比例改變"],
    ecology: ["生產者", "消費者", "分解者", "能量流"]
  }[module.id] || module.map.slice(0, 4);
}

function errorReasonLabel(item) {
  if (item.confidence === "low" || item.reason === "guess") return "可能是猜的";
  if (item.reason === "eliminate") return "刪去法不穩";
  if (item.reason === "evidence") return "資料判讀失誤";
  return "概念還沒扣緊";
}

function renderGeneratedNotes() {
  if (!latestDiagnosis || !notesContent) return;
  const focusItems = diagnosisFocusItems();
  const focusModules = uniqueFocusModules();
  const issueMatches = focusModules
    .flatMap((module) => issues.filter((issue) => issue.moduleId === module.id).slice(0, 2))
    .slice(0, 5);
  const weakList = latestDiagnosis.weakConcepts.length
    ? latestDiagnosis.weakConcepts
    : ["目前沒有明顯錯題，改挑戰跨章節素養題與低信心題"];
  notesContent.innerHTML = `
    <div class="micro-ai-panel">
      <div>
        <p class="eyebrow">專屬攻略生成器</p>
        <h3>微型 AI 幫你把錯題變筆記</h3>
        <p>這份筆記改成圖像卡：先看圖，再看關鍵字，最後只記下一步。正式版可再串接雲端 AI 與教師審核。</p>
      </div>
      <div class="ability-card">
        <span>${latestDiagnosis.abilityBand.name}</span>
        <p>${latestDiagnosis.abilityBand.text}</p>
      </div>
      <div class="rainbow-card">${latestDiagnosis.rainbow}</div>
    </div>
    <div class="visual-roadmap">
      <article>
        <span>1</span>
        <strong>錯在哪</strong>
        <p>${weakList.slice(0, 2).join("、")}</p>
      </article>
      <article>
        <span>2</span>
        <strong>看哪張圖</strong>
        <p>${focusModules.map((module) => module.title.replace(/^第 \d+ 章 /, "")).join("、")}</p>
      </article>
      <article>
        <span>3</span>
        <strong>再打一題</strong>
        <p>看完圖卡後，按下方按鈕進入復仇檢核。</p>
      </article>
    </div>
    <div class="ai-note-grid visual-notes">
      ${focusModules.map((module) => `
        <article class="note-card picture-card">
          <h3>${module.title}</h3>
          <div class="picture-strip">
            ${visualAnalogy(module).map((item) => `<span>${item}</span>`).join("")}
          </div>
          <p class="big-memory">${module.memory}</p>
          <div class="mini-flow">
            ${module.map.slice(0, 4).map((point, index) => `
              <div><b>${index + 1}</b><span>${point}</span></div>
            `).join("")}
          </div>
          <div class="exam-chips">
            ${module.exam.slice(0, 4).map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `).join("")}
      <article class="note-card mistake-card">
        <h3>錯因雷達</h3>
        ${focusItems.slice(0, 5).map((item) => `
          <div class="mistake-row">
            <strong>${item.concept}</strong>
            <span>${errorReasonLabel(item)}</span>
          </div>
        `).join("")}
      </article>
      <article class="note-card compare-card">
        <h3>下次看到題目，先看這裡</h3>
        ${focusModules.map((module) => `
          <div class="look-card">
            <strong>${module.title.replace(/^第 \d+ 章 /, "")}</strong>
            <p>${module.solve}</p>
          </div>
        `).join("")}
      </article>
      <article class="note-card">
        <h3>本輪只做一件事</h3>
        <p class="one-task">${studyAdviceForBand()}</p>
      </article>
      <article class="note-card">
        <h3>真實世界連結</h3>
        ${issueMatches.map((issue) => `
          <section class="issue-mini">
            <strong>${issue.chapter}｜${issue.title}</strong>
            <small>練習問法：${issue.prompts[0]}</small>
          </section>
        `).join("") || "<p>這輪沒有指定弱章節，請挑戰任一章跨單元議題。</p>"}
      </article>
    </div>
    <div class="note-template visual-template">
      <h3>錯題變圖卡</h3>
      ${focusItems.slice(0, 6).map((item) => `
        <article>
          <div class="flash-head">
            <span>${item.type}</span>
            <strong>${item.concept}</strong>
          </div>
          <div class="flash-body">
            <div><b>我選</b><span>${item.selected === undefined ? "挑戰題" : item.options[item.selected] || "未作答"}</span></div>
            <div><b>正解</b><span>${item.options[item.answer]}</span></div>
            <div><b>線索</b><span>${item.hint}</span></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderRecheck() {
  if (!latestDiagnosis || !recheckForm) return;
  const recheckItems = diagnosisFocusItems().slice(0, 6);
  recheckResult.hidden = true;
  recheckResult.innerHTML = "";
  recheckForm.innerHTML = recheckItems.map((item, index) => `
    <article class="quiz-question">
      <div class="quiz-tags">
        <span>${moduleForQuestion(item).title}</span>
        <span>${item.concept}</span>
        <span>復仇檢核</span>
      </div>
      <p><strong>${index + 1}. ${item.q}</strong></p>
      <fieldset>
        ${item.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="rq${index}" value="${optionIndex}" required>
            <span>${option}</span>
          </label>
        `).join("")}
      </fieldset>
    </article>
  `).join("") + `
    <div class="quiz-actions">
      <button class="primary-button" type="submit">送出復仇檢核</button>
      <button class="secondary-button" type="button" id="backToNotes">回筆記再看一次</button>
    </div>
  `;
  recheckForm.querySelector("#backToNotes").addEventListener("click", () => {
    generatedNotes.hidden = false;
    generatedNotes.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  recheckForm.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(recheckForm);
    let score = 0;
    const missedAgain = [];
    recheckItems.forEach((item, index) => {
      const selected = Number(formData.get(`rq${index}`));
      if (selected === item.answer) {
        score += 1;
      } else {
        missedAgain.push({ ...item, selected, recheckIndex: index });
      }
    });
    const passed = score >= Math.ceil(recheckItems.length * 0.75);
    recheckResult.hidden = false;
    recheckResult.innerHTML = `
      <h3>復仇檢核：${score} / ${recheckItems.length}</h3>
      <div class="rainbow-card">${passed ? "很好，你把錯題變成經驗值了。下一輪可以挑戰更像會考的資料題。" : "還差一點，這不是退步，是系統幫你抓到真正要補的洞。"}</div>
      <p><strong>下一步：</strong>${passed ? "回到章節學習地圖，勾選已掌握任務，或挑戰新的考古題組。" : "回到微型 AI 筆記，把錯的概念用自己的話重寫一次，再做同類題。"}</p>
      ${missedAgain.length ? `
        <div class="wrong-review">
          <h4>仍需加強</h4>
          ${missedAgain.map((item) => `
            <article>
              <strong>${item.chapter} > ${item.concept}</strong>
              <p><b>正確答案：</b>${item.options[item.answer]}</p>
              <p><b>詳解：</b>${item.explain}</p>
              <p><b>出處：</b>${item.source}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      <button class="primary-button" type="button" id="finishCycle">${passed ? "完成本輪，回學習地圖" : "回筆記補強"}</button>
    `;
    document.querySelector("#finishCycle").addEventListener("click", () => {
      const target = passed ? "#modules" : "#generated-notes";
      document.querySelector(target).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    recheckResult.scrollIntoView({ behavior: "smooth", block: "center" });
  };
}

function renderQuiz() {
  quizForm.innerHTML = quiz.map((item, index) => `
    <article class="quiz-question">
      <div class="quiz-tags">
        <span>${item.chapter}</span>
        <span>${item.concept}</span>
        <span>${item.type}</span>
      </div>
      <p><strong>${index + 1}. ${item.q}</strong></p>
      <fieldset>
        ${item.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="q${index}" value="${optionIndex}" required>
            <span>${option}</span>
          </label>
        `).join("")}
      </fieldset>
      <div class="anti-guess">
        <label>信心程度
          <select name="confidence${index}" required>
            <option value="">請選擇</option>
            <option value="high">很確定</option>
            <option value="mid">有點確定</option>
            <option value="low">不確定，可能是猜的</option>
          </select>
        </label>
        <label>我選這個答案的理由
          <select name="reason${index}" required>
            <option value="">請選擇</option>
            <option value="concept">我用概念判斷</option>
            <option value="evidence">我根據題幹資料判斷</option>
            <option value="eliminate">我用刪去法</option>
            <option value="guess">我其實是猜的</option>
          </select>
        </label>
      </div>
    </article>
  `).join("") + `
    <div class="quiz-actions">
      <button class="primary-button" type="submit">送出診斷</button>
      <button class="secondary-button" type="reset">重新作答</button>
    </div>
  `;
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quizForm);
  let score = 0;
  const missed = [];
  const guessedCorrect = [];
  quiz.forEach((item, index) => {
    const selected = Number(formData.get(`q${index}`));
    const confidence = formData.get(`confidence${index}`);
    const reason = formData.get(`reason${index}`);
    if (selected === item.answer) {
      score += 1;
      if (confidence === "low" || reason === "guess") {
        guessedCorrect.push({ ...item, index, selected, confidence, reason });
      }
    } else {
      missed.push({ ...item, index, selected, confidence, reason });
    }
  });
  const weakConcepts = [...new Set(missed.map((item) => `${item.chapter} > ${item.concept}`))];
  const noteFocus = weakConcepts.length ? weakConcepts.join("、") : "跨單元題組與陌生資料判讀";
  const abilityBand = score >= Math.ceil(quiz.length * 0.78)
    ? { name: "A 衝刺帶", text: "你已能掌握多數概念，接下來要練跨章節題組、陌生資料與選項排除理由。" }
    : score >= Math.ceil(quiz.length * 0.52)
      ? { name: "B 穩固帶", text: "你有基礎，但部分章節概念或圖表判讀還不穩。先補錯題概念，再重做同類題。" }
      : { name: "C 搶救帶", text: "你需要先把核心名詞、構造功能和基本因果補起來。先看圖像筆記，不急著刷難題。" };
  const rainbow = score >= Math.ceil(quiz.length * 0.78)
    ? "你已經站上山腰了，下一步不是多寫，而是把理由說清楚。"
    : score >= Math.ceil(quiz.length * 0.52)
      ? "你不是不會，是有幾個概念還沒扣緊。補對地方，分數會長很快。"
      : "先不用怕，錯題就是地圖。今天只要補起第一個洞，就已經在前進。";
  const nextAction = score >= 6
    ? "挑戰同年度或相鄰年度自然科題組，確認能穩定處理陌生資料。"
    : "先回到學習地圖補強弱章節，再重做同類考古題。";
  const missedHtml = missed.length ? `
    <div class="wrong-review">
      <h4>錯題詳解與補強</h4>
      ${missed.map((item) => `
        <article>
          <strong>第 ${item.index + 1} 題：${item.chapter} > ${item.concept}</strong>
          <p><b>正確答案：</b>${item.options[item.answer]}</p>
          <p><b>詳解：</b>${item.explain}</p>
          <p><b>出處：</b>${item.source}</p>
          <p><b>你的作答狀態：</b>${item.confidence === "low" || item.reason === "guess" ? "低信心或猜答，建議重做同概念題。" : "答錯，請回到概念筆記補強。"}</p>
        </article>
      `).join("")}
    </div>
  ` : "";
  const guessedHtml = guessedCorrect.length ? `
    <div class="wrong-review caution">
      <h4>可能猜對的題目</h4>
      ${guessedCorrect.map((item) => `
        <article>
          <strong>第 ${item.index + 1} 題：${item.chapter} > ${item.concept}</strong>
          <p>你答對了，但信心或理由顯示可能是猜的。建議也列入重做清單。</p>
        </article>
      `).join("")}
    </div>
  ` : "";
  latestDiagnosis = {
    score,
    missed,
    guessedCorrect,
    weakConcepts,
    abilityBand,
    rainbow
  };
  renderGeneratedNotes();
  renderRecheck();
  quizResult.hidden = false;
  quizResult.innerHTML = `
    <h3>考古題診斷結果：${score} / ${quiz.length}</h3>
    <div class="ability-card">
      <span>${abilityBand.name}</span>
      <p>${abilityBand.text}</p>
    </div>
    <div class="rainbow-card">${rainbow}</div>
    <p><strong>第一步，篩弱點：</strong>${weakConcepts.length ? `目前優先補強 ${noteFocus}。` : "目前沒有明顯弱點，可進入 A 級跨單元題組。"}</p>
    <p><strong>第二步，生成重點筆記：</strong>請把錯題整理成「考點、我錯在哪、作答線索、下次提醒」四欄，先掌握最常考的八成核心。</p>
    <p><strong>第三步，重做檢核：</strong>${nextAction}</p>
    <button class="primary-button" id="goNotes" type="button">下一步：生成我的筆記</button>
    ${missedHtml}
    ${guessedHtml}
  `;
  document.querySelector("#goNotes").addEventListener("click", () => {
    generatedNotes.hidden = false;
    generatedNotes.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  quizResult.scrollIntoView({ behavior: "smooth", block: "center" });
});

quizForm.addEventListener("reset", () => {
  quizResult.hidden = true;
  generatedNotes.hidden = true;
  recheckSection.hidden = true;
});

document.querySelector("#confirmNotes").addEventListener("click", () => {
  if (!latestDiagnosis) return;
  recheckSection.hidden = false;
  recheckSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#printPlan").addEventListener("click", () => window.print());

function setStaffAccess(isAllowed) {
  document.body.classList.toggle("staff-mode", isAllowed);
  document.querySelectorAll(".staff-only, [data-audience='staff']").forEach((element) => {
    element.classList.toggle("locked", !isAllowed);
  });
  document.querySelector("#accessStatus").textContent = isAllowed ? "教師端" : "學生端";
  localStorage.setItem(staffAccessKey, isAllowed ? "1" : "0");
}

document.querySelector("#staffToggle").addEventListener("click", () => {
  document.querySelector("#staff-login").classList.add("open");
  document.querySelector("#staff-login").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#unlockStaff").addEventListener("click", () => {
  const code = document.querySelector("#staffCode").value.trim();
  const message = document.querySelector("#gateMessage");
  if (code === "demo") {
    setStaffAccess(true);
    message.textContent = "已切換到教師端。這只是原型入口；正式上線需使用校內帳號與後端權限。";
    document.querySelector("#teacher").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  message.textContent = "代碼不正確。展示代碼為 demo；正式版應由伺服器驗證教職員身分。";
});

document.querySelector("#lockStaff").addEventListener("click", () => {
  setStaffAccess(false);
  document.querySelector("#staff-login").classList.remove("open");
  document.querySelector("#staffCode").value = "";
  document.querySelector("#gateMessage").textContent = "已回到學生端，教師工具與全校系統已隱藏。";
  document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth", block: "start" });
});

function verifyStudentIdentity() {
  const studentId = document.querySelector("#loginStudentId").value.trim();
  const name = document.querySelector("#loginName").value.trim();
  const status = document.querySelector("#studentVerifyStatus");
  const idPattern = new RegExp(`^\\d{${studentIdRule.length}}$`);
  const idOk = idPattern.test(studentId) && (
    studentIdRule.allowedPrefixes.length === 0 ||
    studentIdRule.allowedPrefixes.some((prefix) => studentId.startsWith(prefix))
  );
  const nameOk = /^[\u4e00-\u9fa5]{2,5}(?:[・．·][\u4e00-\u9fa5]{1,4})?$/.test(name);
  const suspiciousName = /(同學|老師|座號|班|號|測試|test|admin|學生)/i.test(name);
  if (studentDirectory.length) {
    const matched = studentDirectory.find((student) =>
      student.active !== false &&
      String(student.studentId).trim() === studentId &&
      String(student.name).trim() === name
    );
    if (matched) {
      const trackName = trackFromStudentRecord(matched);
      applyStudentTrack(trackName);
      status.textContent = `名冊審核通過：${matched.classNo || ""}${matched.seatNo ? ` ${matched.seatNo}號` : ""} ${name}，已切換到${trackName === "exam" ? "八升九會考準備模式" : "七升八暑假複習模式"}。`;
      status.classList.add("verified");
      localStorage.setItem("bio-cap-review-student", JSON.stringify({
        studentId,
        name,
        grade: matched.grade,
        classNo: matched.classNo,
        seatNo: matched.seatNo,
        email: matched.email || ""
      }));
      document.querySelector(".audience-panel").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    status.textContent = "名冊查無此學號姓名組合。請確認輸入是否與學校資料一致，或點信箱請教務端手動處理。";
    status.classList.remove("verified");
    return;
  }
  if (idOk && nameOk && !suspiciousName) {
    const trackName = studentId.startsWith("5") ? "exam" : "summer";
    applyStudentTrack(trackName);
    status.textContent = `格式審核通過：${studentId} ${name}，已暫時切換到${trackName === "exam" ? "八升九會考準備模式" : "七升八暑假複習模式"}（展示模式，正式版會改用年度名冊比對）。`;
    status.classList.add("verified");
    localStorage.setItem("bio-cap-review-student", JSON.stringify({ studentId, name, trackName }));
    document.querySelector(".audience-panel").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  status.textContent = "審核未通過：請確認學號為 6 碼，姓名不可含暱稱、班級、座號或其他詞。正式版會以年度名冊為準。";
  status.classList.remove("verified");
}

document.querySelector("#verifyStudent").addEventListener("click", verifyStudentIdentity);

function trackFromStudentRecord(student) {
  const grade = String(student.grade || "");
  const classNo = String(student.classNo || "");
  if (grade === "9" || classNo.startsWith("9")) return "exam";
  return "summer";
}

document.querySelector("#studentFeedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const student = JSON.parse(localStorage.getItem("bio-cap-review-student") || "{}");
  const feedback = JSON.parse(localStorage.getItem(feedbackInboxKey) || "[]");
  const record = {
    feedback_id: `local-${Date.now()}`,
    timestamp: new Date().toISOString(),
    student_id: student.studentId || "",
    student_name: student.name || "未登入學生",
    class_id: student.classNo || "",
    feedback_type: formData.get("feedback_type"),
    page_context: formData.get("page_context"),
    related_question_id: formData.get("related_question_id"),
    related_chapter_id: "",
    message: formData.get("message"),
    status: "待處理",
    handled_by: "",
    admin_note: "",
    updated_at: new Date().toISOString()
  };
  feedback.unshift(record);
  localStorage.setItem(feedbackInboxKey, JSON.stringify(feedback.slice(0, 30)));
  document.querySelector("#studentFeedbackStatus").textContent = `已送出回饋編號 ${record.feedback_id}。靜態展示版先存在本機；正式版會送到教師端後台。`;
  event.currentTarget.reset();
});

const studentTracks = {
  summer: {
    gradeValue: "8",
    label: "目前模式：七升八",
    title: "暑假軟性複習，先把記憶留住",
    goal: "每天只要完成一個短任務：回想概念、做暖身題、看一張圖或整理一張小卡。",
    reward: "獎勵重點：穩定回來複習、完成任務、保持熟悉感。",
    next: "先完成 6 題暑假暖身題，找出快忘記的概念。",
    steps: [
      ["暑假暖身開機", "不用有壓力，先用短題喚醒細胞、人體、植物的記憶。"],
      ["找出快睡著的概念", "只標出最不熟的 1 到 2 個概念，不需要一次補完全部。"],
      ["做一張記憶護身符", "用一句話、一張圖或一個生活例子把概念留下來。"],
      ["隔幾天回來補魔", "答得出來就過關，答不出來就回去看小卡。"]
    ]
  },
  exam: {
    gradeValue: "9",
    label: "目前模式：八升九",
    title: "會考準備模式，目標增 A 減 C",
    goal: "先用考古題找弱點，再用錯題筆記補八成常考核心，最後重做同類題檢核。",
    reward: "獎勵重點：錯題訂正完整、重做進步、章節精熟與考古題通過。",
    next: "先完成 8 題考古題診斷，系統會告訴你要補哪一章。",
    steps: [
      ["會考雷達啟動", "不用先讀完整章節，先用題目找出會考弱點。"],
      ["弱點現形時間", "把錯題標成章節、題型、錯因，知道自己卡在哪裡。"],
      ["讀你的專屬攻略", "只讀最需要補的八成考點，不用從第一頁重新讀。"],
      ["復仇檢核開打", "答對就升級，答錯就回到錯題筆記修正。"]
    ]
  }
};

function applyStudentTrack(trackName) {
  const track = studentTracks[trackName];
  document.querySelectorAll("[data-track]").forEach((item) => {
    item.classList.toggle("active", item.dataset.track === trackName);
  });
  document.querySelector("#trackLabel").textContent = track.label;
  document.querySelector("#trackTitle").textContent = track.title;
  document.querySelector("#trackGoal").textContent = track.goal;
  document.querySelector("#trackReward").textContent = track.reward;
  track.steps.forEach(([title, text], index) => {
    document.querySelector(`#flowStep${index + 1}`).textContent = title;
    document.querySelector(`#flowText${index + 1}`).textContent = text;
  });
  document.querySelector("#singleNextTask").textContent = track.next;
  const gradeSelect = document.querySelector("#gradeSelect");
  if (gradeSelect) gradeSelect.value = track.gradeValue;
}

function renderWeeklyReading() {
  const item = weeklyReadings[0];
  const comments = JSON.parse(localStorage.getItem(weeklyCommentsKey) || "[]");
  document.querySelector("#weeklyCard").innerHTML = `
    <div class="weekly-meta">
      <span>${item.week}</span>
      <span>${item.chapter}</span>
      <span>${item.evidenceType}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="source-box">
      <p><strong>新聞／官方出處：</strong><a href="${item.url}">${item.source}</a></p>
      <p><strong>期刊延伸：</strong>${item.journalSource}</p>
      <p>${item.sourceNote}</p>
    </div>
    <div class="weekly-prompts">
      ${item.prompts.map((prompt, index) => `<div><strong>問題 ${index + 1}</strong><p>${prompt}</p></div>`).join("")}
    </div>
    <div class="discussion-box">
      <h4>留言討論</h4>
      <label>我的想法或問題
        <textarea id="weeklyCommentInput" rows="3" placeholder="例如：我覺得積水容器和蚊子族群數量有關，想知道溫度是否也會影響孵化速度。"></textarea>
      </label>
      <button class="primary-button" id="saveWeeklyComment" type="button">送出留言</button>
      <div class="comment-list">
        ${comments.length ? comments.map((comment) => `<article><strong>${comment.name}</strong><p>${comment.text}</p></article>`).join("") : "<p>還沒有留言，先寫下你的第一個想法。</p>"}
      </div>
    </div>
  `;
  document.querySelector("#saveWeeklyComment").addEventListener("click", () => {
    const input = document.querySelector("#weeklyCommentInput");
    const text = input.value.trim();
    if (!text) return;
    const student = JSON.parse(localStorage.getItem("bio-cap-review-student") || "{}");
    comments.unshift({
      name: student.name || "匿名學生",
      text
    });
    localStorage.setItem(weeklyCommentsKey, JSON.stringify(comments.slice(0, 12)));
    renderWeeklyReading();
  });
}

document.querySelectorAll("[data-track]").forEach((button) => {
  button.addEventListener("click", () => applyStudentTrack(button.dataset.track));
});

let demoXp = 0;

function levelFromXp(xp) {
  if (xp >= 900) return ["A 級研究員", "跨單元素養題與歷屆題組是你的主線任務。"];
  if (xp >= 650) return ["精熟探究者", "開始穩定挑戰圖表推論與實驗設計題。"];
  if (xp >= 350) return ["概念修復師", "先把弱章節補到基礎通過，再往精熟題推進。"];
  return ["芽苗學徒", "完成診斷與第一個章節任務即可升級。"];
}

function renderGamePanel() {
  const [name, help] = levelFromXp(demoXp);
  document.querySelector("#levelName").textContent = name;
  document.querySelector("#levelHelp").textContent = help;
  document.querySelector("#xpBar").style.width = `${Math.min(100, (demoXp / 500) * 100)}%`;
  document.querySelector("#xpLabel").textContent = `${demoXp} / 500 XP`;
}

function formatDate(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function weeklyRankText() {
  const now = new Date();
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  const nextMonday = new Date(monday);
  nextMonday.setDate(monday.getDate() + 7);
  return `本週榜：${formatDate(monday)} 至 ${formatDate(nextMonday)} 00:00 前；每週一刷新。`;
}

function rankRows(grade) {
  const students = roster.filter((student) => student.grade === grade).sort((a, b) => b.xp - a.xp);
  const topGain = [...students].sort((a, b) => b.gain - a.gain)[0]?.name;
  return `
    <table class="rank-table">
      <thead><tr><th>名次</th><th>學生</th><th>XP</th><th>進步</th><th>獎項</th></tr></thead>
      <tbody>
        ${students.map((student, index) => {
          const awards = [];
          if (index < 3) awards.push(`第 ${index + 1} 名`);
          if (student.name === topGain) awards.push("進步獎");
          return `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.xp}</td>
            <td>+${student.gain}</td>
            <td>${awards.map((award) => `<span class="award">${award}</span>`).join(" ")}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
}

function improvementRows() {
  const students = [...roster].sort((a, b) => b.gain - a.gain).slice(0, 6);
  return `
    <table class="rank-table">
      <thead><tr><th>名次</th><th>學生</th><th>年級</th><th>使用前</th><th>最近</th><th>進步</th></tr></thead>
      <tbody>
        ${students.map((student, index) => `<tr>
          <td>${index + 1}</td>
          <td>${student.name}${index === 0 ? ' <span class="award">最大進步</span>' : ""}</td>
          <td>${student.grade} 年級</td>
          <td>${student.before}</td>
          <td>${student.after}</td>
          <td>+${student.gain}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderRanks() {
  const text = weeklyRankText();
  document.querySelector("#rank8Week").textContent = text;
  document.querySelector("#rank9Week").textContent = text;
  document.querySelector("#improvementWeek").textContent = `${text} 依「網站前診斷分數」到「最近一次檢核分數」的進步幅度排序。`;
  document.querySelector("#rank8").innerHTML = rankRows(8);
  document.querySelector("#rank9").innerHTML = rankRows(9);
  document.querySelector("#improvementRank").innerHTML = improvementRows();
}

function renderTeacherDashboard(grade = 8) {
  const students = roster.filter((student) => student.grade === Number(grade));
  const aCount = students.filter((student) => student.tier === "A").length;
  const cCount = students.filter((student) => student.tier === "C").length;
  const avgProgress = Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length);
  const chapterAvg = chapterNames.map((chapter, index) => ({
    chapter,
    value: Math.round(students.reduce((sum, student) => sum + student.mastery[index], 0) / students.length)
  }));
  const weakest = [...chapterAvg].sort((a, b) => a.value - b.value)[0];
  document.querySelector("#aCount").textContent = String(aCount);
  document.querySelector("#cCount").textContent = String(cCount);
  document.querySelector("#avgProgress").textContent = `${avgProgress}%`;
  document.querySelector("#weakChapter").textContent = weakest.chapter;
  document.querySelector("#heatmap").innerHTML = chapterAvg.map((item) => `
    <div class="heat-row">
      <strong>${item.chapter}</strong>
      <div class="heat-track"><span style="width:${item.value}%"></span></div>
      <span>${item.value}%</span>
    </div>
  `).join("");
  document.querySelector("#supportList").innerHTML = `
    <table class="support-table">
      <thead><tr><th>學生</th><th>程度</th><th>弱章節</th><th>建議</th></tr></thead>
      <tbody>
        ${students
          .filter((student) => student.tier === "C" || student.progress < 65)
          .map((student) => `<tr>
            <td>${student.name}</td>
            <td>${student.tier}</td>
            <td>${student.weak}</td>
            <td>${student.tier === "C" ? "先做核心概念與基礎題" : "補圖表與章末快問"}</td>
          </tr>`)
          .join("")}
      </tbody>
    </table>
  `;
}

function classMetrics(cls) {
  const students = roster.filter((student) => student.cls === cls);
  if (!students.length) {
    return { students: [], avg: 0, a: 0, c: 0, completion: 0 };
  }
  return {
    students,
    avg: Math.round(students.reduce((sum, student) => sum + student.mastery.reduce((a, b) => a + b, 0) / student.mastery.length, 0) / students.length),
    a: students.filter((student) => student.tier === "A").length,
    c: students.filter((student) => student.tier === "C").length,
    completion: Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)
  };
}

function populateClasses() {
  const scope = document.querySelector("#scopeSelect").value;
  const grade8 = schoolClasses[scope].grade8;
  const grade9 = schoolClasses[scope].grade9;
  document.querySelector("#classSelect").innerHTML = [...grade8, ...grade9]
    .map((cls) => `<option value="${cls}">${cls}</option>`)
    .join("");
}

function renderSchoolSystem() {
  const scope = document.querySelector("#scopeSelect").value;
  const role = document.querySelector("#roleSelect").value;
  const cls = document.querySelector("#classSelect").value;
  const metrics = classMetrics(cls);
  const roleNames = {
    mentor: "導師班級概況",
    subject: "科任章節概況",
    admin: "教務端全校概況"
  };
  const totalClasses = schoolClasses[scope].grade8.length + schoolClasses[scope].grade9.length;
  document.querySelector("#roleTitle").textContent = roleNames[role];
  document.querySelector("#roleSummary").innerHTML = `
    <p><strong>${schoolClasses[scope].name}</strong></p>
    <p>七升八 ${schoolClasses[scope].grade8.length} 班，八升九 ${schoolClasses[scope].grade9.length} 班，共 ${totalClasses} 個學習單位。</p>
    <p>目前檢視 ${cls}：平均掌握 ${metrics.avg || "尚無"}%，C 風險 ${metrics.c} 人，A 區 ${metrics.a} 人。</p>
    <p>${role === "admin" ? "可串接教務端匯入班級、座號、學籍狀態與段考表現。" : "可查看學生任務完成、弱章節與需要導師關懷的學習狀態。"}</p>
  `;
  const rows = [
    ["平均掌握", metrics.avg],
    ["任務完成", metrics.completion],
    ["A 區比例", metrics.students.length ? Math.round((metrics.a / metrics.students.length) * 100) : 0],
    ["C 風險比例", metrics.students.length ? Math.round((metrics.c / metrics.students.length) * 100) : 0]
  ];
  document.querySelector("#classBars").innerHTML = rows.map(([label, value]) => `
    <div class="class-row">
      <strong>${label}</strong>
      <div class="class-track"><span style="width:${value}%"></span></div>
      <span>${value}%</span>
    </div>
  `).join("");
  document.querySelector("#studentWatch").innerHTML = metrics.students.length ? `
    <table class="watch-table">
      <thead><tr><th>班級</th><th>學生</th><th>程度</th><th>完成率</th><th>弱章節</th><th>下一步</th></tr></thead>
      <tbody>
        ${metrics.students.map((student) => `<tr>
          <td>${student.cls}</td>
          <td>${student.name}</td>
          <td>${student.tier}</td>
          <td>${student.progress}%</td>
          <td>${student.weak}</td>
          <td>${student.tier === "C" ? "安排補救任務" : "維持考古題訓練"}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  ` : `<p>此班級目前尚未匯入學生資料；正式串接後會顯示個別學生狀態。</p>`;
}

document.querySelector("#addQuest").addEventListener("click", () => {
  demoXp += 50;
  renderGamePanel();
});

document.querySelector("#teacherGrade").addEventListener("change", (event) => {
  renderTeacherDashboard(event.target.value);
});

document.querySelector("#scopeSelect").addEventListener("change", () => {
  populateClasses();
  renderSchoolSystem();
});

document.querySelector("#roleSelect").addEventListener("change", renderSchoolSystem);
document.querySelector("#classSelect").addEventListener("change", renderSchoolSystem);

renderModules();
renderIssues();
renderQuiz();
renderWeeklyReading();
updateProgress();
setStaffAccess(localStorage.getItem(staffAccessKey) === "1");
applyStudentTrack("summer");
renderGamePanel();
renderRanks();
renderTeacherDashboard();
populateClasses();
renderSchoolSystem();
