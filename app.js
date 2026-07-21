const CITY_DB = {
  ...(window.CHINA_CITY_DB || {}),
  "北京":[116.4074,39.9042],"上海":[121.4737,31.2304],"天津":[117.2009,39.0842],"重庆":[106.5516,29.563],
  "广州":[113.2644,23.1291],"深圳":[114.0579,22.5431],"杭州":[120.1551,30.2741],"南京":[118.7969,32.0603],
  "武汉":[114.3055,30.5928],"成都":[104.0665,30.5723],"西安":[108.9398,34.3416],"长沙":[112.9388,28.2282],
  "苏州":[120.5853,31.2989],"青岛":[120.3826,36.0671],"厦门":[118.0894,24.4798],"济南":[117.1205,36.6512],
  "郑州":[113.6254,34.7466],"合肥":[117.2272,31.8206],"福州":[119.2965,26.0745],"南昌":[115.8579,28.6829],
  "昆明":[102.8329,24.8801],"贵阳":[106.6302,26.647],"南宁":[108.3665,22.817],"海口":[110.1983,20.044],
  "沈阳":[123.4315,41.8057],"大连":[121.6147,38.914],"长春":[125.3235,43.8171],"哈尔滨":[126.5349,45.8038],
  "石家庄":[114.5149,38.0428],"太原":[112.5489,37.8706],"呼和浩特":[111.7492,40.8426],"乌鲁木齐":[87.6168,43.8256],
  "兰州":[103.8343,36.0611],"西宁":[101.7782,36.6171],"银川":[106.2309,38.4872],"拉萨":[91.1409,29.6456],
  "宁波":[121.5503,29.8746],"无锡":[120.3119,31.4912],"常州":[119.9741,31.8112],"温州":[120.6994,27.9943],
  "嘉兴":[120.7555,30.7461],"绍兴":[120.5821,30.0513],"金华":[119.6474,29.0792],"徐州":[117.2841,34.2058],
  "南通":[120.8943,31.9802],"扬州":[119.4128,32.3944],"镇江":[119.425,32.1896],"东莞":[113.7518,23.0205],
  "佛山":[113.1214,23.0215],"珠海":[113.5767,22.2707],"惠州":[114.4162,23.1115],"中山":[113.3926,22.5176],
  "泉州":[118.6759,24.8741],"烟台":[121.4479,37.4638],"威海":[122.1204,37.5131],"潍坊":[119.1618,36.7069],
  "洛阳":[112.454,34.6197],"开封":[114.3076,34.7972],"唐山":[118.1802,39.6309],"保定":[115.4646,38.8739],
  "秦皇岛":[119.6005,39.9354],"桂林":[110.2902,25.2736],"三亚":[109.5119,18.2528],"大理":[100.2676,25.6065],
  "丽江":[100.2277,26.855],"遵义":[106.927,27.7257],"宜昌":[111.2865,30.6919],"襄阳":[112.1224,32.009],
  "株洲":[113.134,27.8274],"湘潭":[112.944,27.8297],"赣州":[114.935,25.831],"九江":[115.9536,29.661],
  "芜湖":[118.3765,31.3263],"马鞍山":[118.5079,31.6894],"绵阳":[104.6796,31.4675],"乐山":[103.7656,29.5521],
  "宜宾":[104.6432,28.7513],"吉林":[126.5496,43.8378],"延吉":[129.5089,42.8912],"牡丹江":[129.6332,44.5517],
  "香港":[114.1694,22.3193],"澳门":[113.5439,22.1987],"台北":[121.5654,25.033]
};

const SCHOOL_DB = {
  "北京大学":[116.3109,39.9929,"北京"],"清华大学":[116.3269,40.0032,"北京"],"中国人民大学":[116.319,39.9709,"北京"],
  "北京师范大学":[116.366,39.9619,"北京"],"北京航空航天大学":[116.347,39.981,"北京"],"北京理工大学":[116.319,39.958,"北京"],
  "中国农业大学":[116.353,40.008,"北京"],"中央财经大学":[116.347,39.966,"北京"],"中国政法大学":[116.309,39.995,"北京"],
  "复旦大学":[121.503,31.299,"上海"],"上海交通大学":[121.433,31.025,"上海"],"同济大学":[121.506,31.282,"上海"],
  "华东师范大学":[121.399,31.229,"上海"],"上海财经大学":[121.493,31.307,"上海"],"上海大学":[121.399,31.319,"上海"],
  "浙江大学":[120.09,30.304,"杭州"],"中国美术学院":[120.168,30.246,"杭州"],"浙江工业大学":[120.172,30.295,"杭州"],
  "南京大学":[118.777,32.057,"南京"],"东南大学":[118.795,32.061,"南京"],"南京航空航天大学":[118.815,32.044,"南京"],
  "南京理工大学":[118.856,32.031,"南京"],"河海大学":[118.763,32.059,"南京"],"中国药科大学":[118.921,31.907,"南京"],
  "武汉大学":[114.365,30.538,"武汉"],"华中科技大学":[114.413,30.513,"武汉"],"武汉理工大学":[114.343,30.517,"武汉"],
  "华中师范大学":[114.357,30.524,"武汉"],"中南财经政法大学":[114.385,30.478,"武汉"],"中国地质大学":[114.399,30.518,"武汉"],
  "中山大学":[113.298,23.097,"广州"],"华南理工大学":[113.344,23.153,"广州"],"暨南大学":[113.347,23.128,"广州"],
  "华南师范大学":[113.351,23.14,"广州"],"南方科技大学":[113.999,22.602,"深圳"],"深圳大学":[113.934,22.533,"深圳"],
  "四川大学":[104.083,30.63,"成都"],"电子科技大学":[104.1,30.681,"成都"],"西南交通大学":[104.052,30.7,"成都"],
  "西安交通大学":[108.983,34.245,"西安"],"西北工业大学":[108.911,34.246,"西安"],"西安电子科技大学":[108.84,34.129,"西安"],
  "中南大学":[112.925,28.173,"长沙"],"湖南大学":[112.951,28.18,"长沙"],"湖南师范大学":[112.944,28.187,"长沙"],
  "厦门大学":[118.099,24.439,"厦门"],"福州大学":[119.198,26.059,"福州"],"山东大学":[117.052,36.675,"济南"],
  "中国海洋大学":[120.423,36.159,"青岛"],"中国科学技术大学":[117.261,31.839,"合肥"],"合肥工业大学":[117.29,31.847,"合肥"],
  "郑州大学":[113.536,34.817,"郑州"],"南昌大学":[115.802,28.656,"南昌"],"云南大学":[102.704,25.055,"昆明"],
  "重庆大学":[106.47,29.566,"重庆"],"西南大学":[106.426,29.826,"重庆"],"兰州大学":[103.86,36.046,"兰州"],
  "东北大学":[123.423,41.765,"沈阳"],"大连理工大学":[121.531,38.884,"大连"],"吉林大学":[125.281,43.824,"长春"],
  "哈尔滨工业大学":[126.633,45.748,"哈尔滨"],"哈尔滨工程大学":[126.678,45.776,"哈尔滨"],"南开大学":[117.178,39.109,"天津"],
  "天津大学":[117.175,39.109,"天津"],"河北工业大学":[117.063,39.192,"天津"],"太原理工大学":[112.523,37.86,"太原"],
  "内蒙古大学":[111.687,40.817,"呼和浩特"],"新疆大学":[87.618,43.773,"乌鲁木齐"],"广西大学":[108.29,22.838,"南宁"],
  "贵州大学":[106.674,26.435,"贵阳"],"海南大学":[110.326,20.059,"海口"],"宁夏大学":[106.136,38.503,"银川"],
  "苏州大学":[120.635,31.31,"苏州"],"江南大学":[120.277,31.487,"无锡"],"宁波大学":[121.64,29.924,"宁波"]
};

const COLORS = ["#ff6a3d", "#1f6b51", "#e8a928", "#5876c9", "#a65e9c", "#2f8e91", "#d55d71", "#6956a5"];
const EXPORT_THEMES = {
  paper: {
    mapBackground:"#e8eee5", rosterBackground:"#f7f4ec", cardBackground:"#fffdf8", ink:"#17231d", muted:"#66736c",
    line:"#d2d9d2", cardLine:"#d9d6cc", provinceStroke:"#52685c", labelStroke:"#ffffff", route:"#d86745",
    grid:"rgba(31,91,68,.035)", accent:"#a64d31", markerStroke:"#fffff8",
    provinceFills:["#f3f6ef","#e4efe1","#fff4dc","#deebe7"], markerPalette:COLORS
  },
  blueprint: {
    mapBackground:"#e7f0f4", rosterBackground:"#edf4f7", cardBackground:"#f8fcfd", ink:"#17344a", muted:"#5d7282",
    line:"#b7cbd6", cardLine:"#c4d6df", provinceStroke:"#597889", labelStroke:"#f8fcfd", route:"#dd6848",
    grid:"rgba(31,77,104,.05)", accent:"#c95f41", markerStroke:"#f8fcfd",
    provinceFills:["#e9f2f5","#d7e8ef","#f4f8fa","#cfe1ea"], markerPalette:COLORS
  },
  dark: {
    mapBackground:"#17221d", rosterBackground:"#111a16", cardBackground:"#1b2821", ink:"#f0f3e9", muted:"#a7b4aa",
    line:"#46554c", cardLine:"#34453b", provinceStroke:"#748c7d", labelStroke:"#17221d", route:"#e88b6c",
    grid:"rgba(255,255,255,.035)", accent:"#f09a78", markerStroke:"#17221d",
    provinceFills:["#263a30","#344436","#283f39","#3a3c2d"], markerPalette:["#ff8a65","#71c49e","#f1c65b","#7f9eea","#cc82c0","#54b7b9","#e77f91","#9180d5"]
  },
  mono: {
    mapBackground:"#ffffff", rosterBackground:"#f5f5f5", cardBackground:"#ffffff", ink:"#111111", muted:"#555555",
    line:"#999999", cardLine:"#bdbdbd", provinceStroke:"#444444", labelStroke:"#ffffff", route:"#666666",
    grid:"rgba(0,0,0,.035)", accent:"#333333", markerStroke:"#ffffff",
    provinceFills:["#fafafa","#e8e8e8","#f3f3f3","#dddddd"], markerPalette:["#111111","#333333","#555555","#777777","#222222","#444444","#666666","#888888"]
  }
};
const DEMO_NAMES = [
  "陈书昀","林知夏","周景行","王嘉禾","李云开","赵一诺","孙明川","吴简宁","郑北辰","蒋安然",
  "徐闻舟","梁星遥","沈子衿","许青禾","唐嘉言","韩南星","宋今朝","罗弦歌","谢山月","冯成蹊",
  "程小满","陆星野","顾云帆","叶清和","苏言蹊","江予安","白若川","乔以宁","秦照野","何嘉树",
  "高远舟","孟知遥","袁可欣","彭思源","邓雨桐","曹沐阳","魏清越","薛念初","潘嘉宁","杜晓川",
  "丁语禾","任安歌","钟明远","夏予辰","侯星言","姜若琳","熊子墨","邹静姝","余向晚","毛乐之"
];
const PROVINCE_SHORT_NAMES = {
  "北京市":"北京","天津市":"天津","河北省":"河北","山西省":"山西","内蒙古自治区":"内蒙古","辽宁省":"辽宁",
  "吉林省":"吉林","黑龙江省":"黑龙江","上海市":"上海","江苏省":"江苏","浙江省":"浙江","安徽省":"安徽",
  "福建省":"福建","江西省":"江西","山东省":"山东","河南省":"河南","湖北省":"湖北","湖南省":"湖南",
  "广东省":"广东","广西壮族自治区":"广西","海南省":"海南","重庆市":"重庆","四川省":"四川","贵州省":"贵州",
  "云南省":"云南","西藏自治区":"西藏","陕西省":"陕西","甘肃省":"甘肃","青海省":"青海","宁夏回族自治区":"宁夏",
  "新疆维吾尔自治区":"新疆","台湾省":"台湾","香港特别行政区":"香港","澳门特别行政区":"澳门"
};
const STORAGE_KEY = "food-friends-map-v1";
const TITLE_STORAGE_KEY = "food-friends-map-title-v1";
const SLOGAN_STORAGE_KEY = "food-friends-map-slogan-v1";
const EXPORT_THEME_STORAGE_KEY = "food-friends-export-theme-v1";
const DEFAULT_MAP_TITLE = "高中毕业蹭饭地图";
const $ = (selector) => document.querySelector(selector);

let friends = readStoredFriends();
let mapTitle = localStorage.getItem(TITLE_STORAGE_KEY)?.trim() || DEFAULT_MAP_TITLE;
let mapSlogan = localStorage.getItem(SLOGAN_STORAGE_KEY)?.trim() || "";
let exportThemeId = localStorage.getItem(EXPORT_THEME_STORAGE_KEY) || "paper";
if (!EXPORT_THEMES[exportThemeId]) exportThemeId = "paper";
let activeTooltipId = null;
let pinPositions = new Map();

function createFriendId() {
  const cryptoApi = window.crypto || window.msCrypto;
  if (typeof cryptoApi?.randomUUID === "function") return cryptoApi.randomUUID();
  if (typeof cryptoApi?.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    cryptoApi.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map(byte => byte.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
  }
  return `friend-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

async function copyText(text) {
  if (typeof navigator.clipboard?.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Ordinary HTTP pages may expose the API but still reject access.
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = typeof document.execCommand === "function" && document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy is unavailable");
}

function normalize(value) {
  return value.trim().replace(/[\s·•省市区县]/g, "").replace(/学院$/, "大学");
}

function findSchool(input) {
  const query = normalize(input);
  if (!query) return null;
  const exact = Object.entries(SCHOOL_DB).find(([name]) => normalize(name) === query);
  if (exact) return { name: exact[0], lng: exact[1][0], lat: exact[1][1], city: exact[1][2], source: "院校" };
  const fuzzy = Object.entries(SCHOOL_DB).find(([name]) => normalize(name).includes(query) || query.includes(normalize(name)));
  return fuzzy ? { name: fuzzy[0], lng: fuzzy[1][0], lat: fuzzy[1][1], city: fuzzy[1][2], source: "院校" } : null;
}

function findCity(input) {
  const query = normalize(input);
  if (!query) return null;
  const exact = Object.entries(CITY_DB).find(([name]) => normalize(name) === query);
  const fuzzy = exact || Object.entries(CITY_DB).find(([name]) => query.includes(normalize(name)) || normalize(name).includes(query));
  return fuzzy ? { name: fuzzy[0], lng: fuzzy[1][0], lat: fuzzy[1][1], city: fuzzy[0], source: "城市" } : null;
}

function resolveLocation(city, school, lng, lat) {
  const manualLng = Number(lng);
  const manualLat = Number(lat);
  if (lng !== "" && lat !== "" && Number.isFinite(manualLng) && Number.isFinite(manualLat) && manualLng >= 73 && manualLng <= 135 && manualLat >= 15 && manualLat <= 54) {
    return { name: city, city: findCity(city)?.city || city.trim(), lng: manualLng, lat: manualLat, source: "手动坐标" };
  }
  return findSchool(school) || findCity(city);
}

function project(lng, lat) {
  const x = 70 + ((lng - 73) / (135.5 - 73)) * 840;
  const y = 532 - ((lat - 18) / (54 - 18)) * 510;
  return [Math.max(64, Math.min(930, x)), Math.max(18, Math.min(538, y))];
}

function projectInset(lng, lat) {
  const x = 782 + ((lng - 107.5) / (122.5 - 107.5)) * 150;
  const y = 523 - ((lat - 2.5) / (21 - 2.5)) * 146;
  return [x, y];
}

function ringToPath(ring) {
  if (!ring.length) return "";
  const averageLat = ring.reduce((sum, coordinate) => sum + coordinate[1], 0) / ring.length;
  const projection = averageLat < 17.8 ? projectInset : project;
  return ring.map(([lng, lat], index) => {
    const [x, y] = projection(lng, lat);
    return `${index ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ") + " Z";
}

function geometryToPath(geometry) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.flatMap(polygon => polygon.map(ringToPath)).join(" ");
}

function renderBaseMap() {
  const data = window.CHINA_GEOJSON;
  if (!data?.features) return;
  $("#provinceLayer").innerHTML = data.features.map(feature => {
    const name = feature.properties.name;
    const lineClass = name ? "" : " jurisdiction-line";
    const title = name || "海洋岛屿与界线要素";
    return `<path class="province${lineClass}" d="${geometryToPath(feature.geometry)}" fill-rule="evenodd"><title>${title}</title></path>`;
  }).join("");

  $("#provinceLabelLayer").innerHTML = data.features.filter(feature => feature.properties.name).map(feature => {
    const { name, centroid, center } = feature.properties;
    const point = centroid || center;
    if (!point) return "";
    let [x, y] = project(point[0], point[1]);
    if (name === "香港特别行政区") { x += 13; y += 7; }
    if (name === "澳门特别行政区") { x -= 16; y += 8; }
    if (name === "北京市") y -= 6;
    if (name === "天津市") { x += 7; y += 5; }
    if (name === "上海市") { x += 9; y += 2; }
    const micro = ["北京市","天津市","上海市","香港特别行政区","澳门特别行政区"].includes(name) ? " micro" : "";
    return `<text class="province-label${micro}" x="${x.toFixed(1)}" y="${y.toFixed(1)}">${PROVINCE_SHORT_NAMES[name] || name}</text>`;
  }).join("");
}

function readStoredFriends() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(friends));
}

function escapeHtml(text) {
  const node = document.createElement("div");
  node.textContent = text;
  return node.innerHTML;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function renderFriends() {
  $("#clearButton").hidden = friends.length === 0;
}

function renderTitle() {
  $("#mapTitle").textContent = mapTitle;
  $("#mapTitleInput").value = mapTitle;
  $("#mapSloganInput").value = mapSlogan;
  $("#previewSlogan").textContent = mapSlogan;
  $("#previewSlogan").hidden = !mapSlogan;
  document.title = `${mapTitle} · 饭友地图局`;
}

function getExportTheme() {
  return EXPORT_THEMES[exportThemeId] || EXPORT_THEMES.paper;
}

function applyPreviewTheme() {
  const theme = getExportTheme();
  const card = $("#mapCard");
  const variables = {
    "--preview-map-bg": theme.mapBackground,
    "--preview-roster-bg": theme.rosterBackground,
    "--preview-card-bg": theme.cardBackground,
    "--preview-ink": theme.ink,
    "--preview-muted": theme.muted,
    "--preview-line": theme.line,
    "--preview-province-stroke": theme.provinceStroke,
    "--preview-label-stroke": theme.labelStroke,
    "--preview-grid": theme.grid,
    "--preview-accent": theme.accent,
    "--preview-marker-stroke": theme.markerStroke,
    "--preview-province-0": theme.provinceFills[0],
    "--preview-province-1": theme.provinceFills[1],
    "--preview-province-2": theme.provinceFills[2],
    "--preview-province-3": theme.provinceFills[3]
  };
  Object.entries(variables).forEach(([name, value]) => card.style.setProperty(name, value));
}

function groupFriendsForRoster() {
  const regions = new Map();
  friends.forEach((friend, index) => {
    const regionName = friend.city || "其他地区";
    const schoolName = friend.school || "其他去向";
    if (!regions.has(regionName)) regions.set(regionName, new Map());
    const schools = regions.get(regionName);
    if (!schools.has(schoolName)) schools.set(schoolName, []);
    schools.get(schoolName).push({ friend, index });
  });

  return [...regions.entries()]
    .map(([region, schools]) => ({
      region,
      schools: [...schools.entries()]
        .map(([school, people]) => ({ school, people }))
        .sort((a, b) => b.people.length - a.people.length || a.school.localeCompare(b.school, "zh-CN"))
    }))
    .map(group => ({ ...group, count: group.schools.reduce((sum, school) => sum + school.people.length, 0) }))
    .sort((a, b) => b.count - a.count || a.region.localeCompare(b.region, "zh-CN"));
}

function renderRoster() {
  if (!friends.length) {
    $("#leftCalloutList").innerHTML = "";
    $("#rightCalloutList").innerHTML = "";
    return;
  }

  const layout = planCalloutLayout(groupFriendsForRoster());
  const theme = getExportTheme();
  const palette = theme.markerPalette;
  const markup = entry => `
    <section class="preview-callout" style="--callout-color:${palette[entry.index % palette.length]}">
      <div class="preview-callout-heading"><strong>${escapeHtml(entry.group.region)}</strong><span>${entry.group.count} 人</span></div>
      <div class="preview-callout-people">
        ${entry.people.map(({friend}) => `
          <div class="preview-person-row">
            <button class="preview-person" type="button" data-roster-id="${friend.id}" aria-label="在地图中查看 ${escapeHtml(friend.name)}">
              <strong>${escapeHtml(friend.name)}</strong><span>${escapeHtml(friend.school || "其他去向")}</span>
            </button>
            <button class="roster-delete" data-roster-delete="${friend.id}" type="button" aria-label="删除 ${escapeHtml(friend.name)}">×</button>
          </div>
        `).join("")}
      </div>
    </section>`;
  $("#leftCalloutList").innerHTML = layout.entries.filter(entry => entry.side === "left").map(markup).join("");
  $("#rightCalloutList").innerHTML = layout.entries.filter(entry => entry.side === "right").map(markup).join("");
}

function renderMap() {
  if (activeTooltipId) hideFriendTooltip();
  const empty = friends.length === 0;
  const cityCount = new Set(friends.map(friend => friend.city)).size;
  $("#mapCanvas").classList.toggle("is-empty", empty);
  $("#emptyMap").hidden = !empty;
  $("#mapSummary").textContent = `${friends.length} 位同学 · ${cityCount} 座城市 · FOOD FRIENDS MAP`;
  const theme = getExportTheme();
  const palette = theme.markerPalette;

  const points = friends.map((friend, index) => ({ friend, index, xy: project(friend.lng, friend.lat), displayXY: null }));
  const collisionGroups = points.reduce((groups, item) => {
    const key = `${Math.round(item.xy[0] / 6)}:${Math.round(item.xy[1] / 6)}`;
    (groups[key] ||= []).push(item);
    return groups;
  }, {});
  pinPositions = new Map();
  Object.values(collisionGroups).forEach(group => {
    group.forEach((item, position) => {
      const radius = position === 0 ? 0 : Math.min(9, 6.5 * Math.sqrt(position));
      const angle = position * 2.399963;
      item.displayXY = [item.xy[0] + Math.cos(angle) * radius, item.xy[1] + Math.sin(angle) * radius];
      pinPositions.set(item.friend.id, item.displayXY);
    });
  });
  const cityAnchors = planCalloutLayout(groupFriendsForRoster()).entries.map(entry => {
    const color = palette[entry.index % palette.length];
    const [x, y] = entry.anchor;
    return `<g class="map-anchor" aria-hidden="true">
      <circle class="map-anchor-ring" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="5" fill="${theme.mapBackground}" stroke="${color}"/>
      <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.8" fill="${color}"/>
    </g>`;
  }).join("");
  $("#routeLayer").innerHTML = cityAnchors;
  $("#pinLayer").innerHTML = points.map(({friend, index, displayXY:[x,y]}) => {
    const color = palette[index % palette.length];
    return `<g class="pin" data-pin="${friend.id}" style="--pin-color:${color}" transform="translate(${x.toFixed(2)} ${y.toFixed(2)})">
      <circle class="pin-circle" r="3" fill="${color}"/>
      <title>${escapeHtml(friend.name)} · ${escapeHtml(friend.city)}</title>
    </g>`;
  }).join("");
  renderRoster();
}

function renderAll() { renderTitle(); renderFriends(); applyPreviewTheme(); renderMap(); }

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function createRandomDemoDestinations(count) {
  const schoolsByCity = Object.entries(SCHOOL_DB).reduce((groups, [school, [lng, lat, city]]) => {
    (groups[city] ||= []).push({city, school, lng, lat});
    return groups;
  }, {});
  const cityGroups = shuffle(Object.values(schoolsByCity));
  const cityCount = Math.min(cityGroups.length, 12 + Math.floor(Math.random() * 6));
  const selectedCities = cityGroups.slice(0, cityCount);
  const weightedCities = selectedCities.flatMap(citySchools =>
    Array.from({length: 1 + Math.floor(Math.random() * 5)}, () => citySchools)
  );
  const pickSchool = citySchools => citySchools[Math.floor(Math.random() * citySchools.length)];
  const destinations = selectedCities.map(pickSchool);
  while (destinations.length < count) {
    destinations.push(pickSchool(weightedCities[Math.floor(Math.random() * weightedCities.length)]));
  }
  return shuffle(destinations);
}

function loadDemo() {
  const destinations = createRandomDemoDestinations(DEMO_NAMES.length);
  friends = shuffle(DEMO_NAMES).map((name, index) => {
    const destination = destinations[index];
    return { id:createFriendId(), name, ...destination, source:"院校" };
  });
  persist(); renderAll(); toast("已随机生成 50 位示例饭友");
  $("#mapSection").scrollIntoView({behavior:"smooth"});
}

function updateMatchHint() {
  const school = findSchool($("#schoolInput").value);
  const city = findCity($("#cityInput").value);
  const hint = $("#matchHint");
  hint.className = "match-hint";
  if (school) { hint.classList.add("success"); hint.innerHTML = `<span class="pulse-dot"></span> 已匹配 ${escapeHtml(school.name)} · ${school.city}`; }
  else if (city) { hint.classList.add("success"); hint.innerHTML = `<span class="pulse-dot"></span> 已匹配 ${city.city} 城市坐标`; }
  else { hint.innerHTML = `<span class="pulse-dot"></span> 内置常见高校与 300+ 城市坐标，输入后自动匹配`; }
}

function renderCitySuggestions() {
  $("#citySuggestions").innerHTML = Object.keys(CITY_DB)
    .sort((a, b) => a.localeCompare(b, "zh-CN"))
    .map(city => `<option value="${escapeHtml(city)}"></option>`)
    .join("");
}

$("#friendForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const city = form.get("city").trim();
  const school = form.get("school").trim();
  const location = resolveLocation(city, school, form.get("lng").trim(), form.get("lat").trim());
  if (!location) {
    const hint = $("#matchHint");
    hint.className = "match-hint error";
    hint.innerHTML = `<span class="pulse-dot"></span> 暂时没认出这个地点，请展开“手动坐标”补充经纬度`;
    $("#coordinateTrigger").click();
    return;
  }
  friends.push({ id: createFriendId(), name, city: location.city || city, school, lng: location.lng, lat: location.lat, source: location.source });
  persist(); renderAll(); event.currentTarget.reset(); updateMatchHint();
  toast(`${name} 已加入饭局`);
});

$("#clearButton").addEventListener("click", () => {
  if (!confirm("确定清空全部饭友吗？这项操作无法撤销。")) return;
  friends = []; persist(); renderAll(); toast("地图已清空");
});

$("#coordinateTrigger").addEventListener("click", () => {
  const fields = $("#coordinateFields");
  fields.hidden = !fields.hidden;
  $("#coordinateTrigger").setAttribute("aria-expanded", String(!fields.hidden));
});

$("#cityInput").addEventListener("input", updateMatchHint);
$("#schoolInput").addEventListener("input", updateMatchHint);
$("#mapTitleInput").addEventListener("input", event => {
  const value = event.currentTarget.value.trim();
  mapTitle = value || DEFAULT_MAP_TITLE;
  if (value) localStorage.setItem(TITLE_STORAGE_KEY, value);
  else localStorage.removeItem(TITLE_STORAGE_KEY);
  $("#mapTitle").textContent = mapTitle;
  document.title = `${mapTitle} · 饭友地图局`;
});
$("#mapSloganInput").addEventListener("input", event => {
  mapSlogan = event.currentTarget.value.trim();
  if (mapSlogan) localStorage.setItem(SLOGAN_STORAGE_KEY, mapSlogan);
  else localStorage.removeItem(SLOGAN_STORAGE_KEY);
  $("#previewSlogan").textContent = mapSlogan;
  $("#previewSlogan").hidden = !mapSlogan;
});
$("#exportStyle").value = exportThemeId;
$("#exportStyle").addEventListener("change", event => {
  exportThemeId = EXPORT_THEMES[event.currentTarget.value] ? event.currentTarget.value : "paper";
  localStorage.setItem(EXPORT_THEME_STORAGE_KEY, exportThemeId);
  applyPreviewTheme();
  renderMap();
});
$("#demoButton").addEventListener("click", loadDemo);

function hideFriendTooltip() {
  const tooltip = $("#mapTooltip");
  tooltip.hidden = true;
  activeTooltipId = null;
  document.querySelectorAll("[data-pin], [data-roster-id]").forEach(element => element.classList.remove("selected"));
}

function showFriendTooltip(friend, toggle = false) {
  const tooltip = $("#mapTooltip");
  if (toggle && activeTooltipId === friend.id && !tooltip.hidden) {
    hideFriendTooltip();
    return;
  }
  const point = pinPositions.get(friend.id) || project(friend.lng, friend.lat);
  tooltip.style.left = `${point[0] / 1000 * 100}%`;
  tooltip.style.top = `${point[1] / 560 * 100}%`;
  tooltip.innerHTML = `<strong>${escapeHtml(friend.name)} · ${escapeHtml(friend.city)}</strong><span>${friend.school ? escapeHtml(friend.school) : "到这里发展"}</span>`;
  tooltip.hidden = false;
  activeTooltipId = friend.id;
  document.querySelectorAll("[data-pin]").forEach(element => element.classList.toggle("selected", element.dataset.pin === friend.id));
  document.querySelectorAll("[data-roster-id]").forEach(element => element.classList.toggle("selected", element.dataset.rosterId === friend.id));
}

$("#mapSvg").addEventListener("click", event => {
  const pin = event.target.closest("[data-pin]");
  if (!pin) { hideFriendTooltip(); return; }
  const friend = friends.find(item => item.id === pin.dataset.pin);
  if (friend) showFriendTooltip(friend, true);
});

$("#mapCalloutLayout").addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-roster-delete]");
  if (deleteButton) {
    const friend = friends.find(item => item.id === deleteButton.dataset.rosterDelete);
    friends = friends.filter(item => item.id !== deleteButton.dataset.rosterDelete);
    persist(); renderAll();
    if (friend) toast(`${friend.name} 已从地图移除`);
    return;
  }
  const person = event.target.closest("[data-roster-id]");
  if (!person) return;
  const friend = friends.find(item => item.id === person.dataset.rosterId);
  if (friend) showFriendTooltip(friend);
});

$("#copyButton").addEventListener("click", async () => {
  const payload = friends.map(({id, ...friend}) => friend);
  try { await copyText(JSON.stringify(payload, null, 2)); toast("饭友数据已复制"); }
  catch { toast("浏览器没有授予剪贴板权限"); }
});

function createExportMapSvg(theme) {
  const svg = $("#mapSvg").cloneNode(true);
  const exportStyles = document.createElementNS("http://www.w3.org/2000/svg", "style");
  exportStyles.textContent = `
    .map-grid{color:${theme.grid}}
    .province{fill:${theme.provinceFills[0]};stroke:${theme.provinceStroke};stroke-width:1}
    .province:nth-child(4n+1){fill:${theme.provinceFills[1]}}.province:nth-child(4n+2){fill:${theme.provinceFills[2]}}
    .province:nth-child(4n+3){fill:${theme.provinceFills[3]}}.province.jurisdiction-line{fill:none;stroke:${theme.provinceStroke};stroke-width:.85}
    .province-label{fill:${theme.muted};font:9px sans-serif;text-anchor:middle;paint-order:stroke;stroke:${theme.labelStroke};stroke-width:2.5px}
    .province-label.micro{font-size:7px}.south-sea-frame rect{fill:none;stroke:${theme.provinceStroke};stroke-dasharray:3 4}
    .south-sea-frame text{fill:${theme.muted};font:bold 9px sans-serif;text-anchor:middle}
    .pin-circle{stroke:${theme.markerStroke};stroke-width:.9}
  `;
  svg.prepend(exportStyles);
  svg.querySelectorAll(".pin-circle").forEach((circle, index) => {
    circle.setAttribute("fill", theme.markerPalette[index % theme.markerPalette.length]);
  });
  return svg;
}

function exportFilename(extension) {
  const filename = mapTitle.replace(/[<>:"\/\\|?*\u0000-\u001F]/g, "-") || "蹭饭地图";
  return `${filename}.${extension}`;
}

function estimateSvgTextWidth(text, fontSize) {
  return [...String(text)].reduce((sum, character) => sum + (character.codePointAt(0) > 255 ? fontSize : fontSize * 0.58), 0);
}

function fitSvgText(text, maxWidth, fontSize) {
  const characters = [...String(text)];
  const characterWidth = character => character.codePointAt(0) > 255 ? fontSize : fontSize * 0.58;
  const totalWidth = estimateSvgTextWidth(text, fontSize);
  if (totalWidth <= maxWidth) return String(text);
  const ellipsisWidth = fontSize;
  let width = 0;
  const output = [];
  for (const character of characters) {
    const nextWidth = width + characterWidth(character);
    if (nextWidth + ellipsisWidth > maxWidth) break;
    output.push(character);
    width = nextWidth;
  }
  return `${output.join("")}…`;
}

function planCalloutLayout(groups) {
  const entries = groups.map((group, index) => {
    const people = group.schools.flatMap(school => school.people);
    const projected = people.map(({friend}) => project(friend.lng, friend.lat));
    const anchor = projected.reduce((sum, point) => [sum[0] + point[0], sum[1] + point[1]], [0, 0])
      .map(total => total / projected.length);
    return {group, people, anchor, index, height: 50 + people.length * 22};
  }).sort((a, b) => a.anchor[0] - b.anchor[0]);

  const splitAt = Math.ceil(entries.length / 2);
  const left = entries.slice(0, splitAt).sort((a, b) => a.anchor[1] - b.anchor[1]);
  const right = entries.slice(splitAt).sort((a, b) => a.anchor[1] - b.anchor[1]);
  const sideHeight = side => side.reduce((sum, entry) => sum + entry.height, 0) + Math.max(0, side.length - 1) * 24;
  const height = Math.max(1050, Math.max(sideHeight(left), sideHeight(right)) + 250);
  const fieldTop = 128;
  const fieldHeight = height - fieldTop - 82;
  const place = (side, sideName) => {
    const contentHeight = side.reduce((sum, entry) => sum + entry.height, 0);
    const gap = side.length > 1 ? Math.min(24, Math.max(10, (fieldHeight - contentHeight) / (side.length - 1))) : 0;
    const usedHeight = contentHeight + gap * Math.max(0, side.length - 1);
    let cursor = fieldTop + Math.max(0, (fieldHeight - usedHeight) / 2);
    return side.map(entry => {
      const placed = {...entry, side: sideName, top: cursor};
      cursor += entry.height + gap;
      return placed;
    });
  };

  return {
    width: 1600,
    height,
    mapX: 300,
    mapY: 170 + Math.max(0, (height - 1050) / 2),
    entries: [...place(left, "left"), ...place(right, "right")]
  };
}

function buildCalloutSvg(layout, theme) {
  return layout.entries.map(entry => {
    const isLeft = entry.side === "left";
    const textX = isLeft ? 40 : 1320;
    const textEnd = isLeft ? 282 : 1560;
    const elbowX = isLeft ? 288 : 1312;
    const edgeX = isLeft ? 28 : 1572;
    const lineY = entry.top + 31;
    const anchorX = layout.mapX + entry.anchor[0];
    const anchorY = layout.mapY + entry.anchor[1];
    const color = theme.markerPalette[entry.index % theme.markerPalette.length];
    const people = entry.people.map(({friend}, personIndex) => {
      const y = entry.top + 59 + personIndex * 22;
      const school = friend.school || "其他去向";
      const schoolWidth = textEnd - textX - estimateSvgTextWidth(friend.name, 16) - 10;
      const schoolPart = schoolWidth > 28
        ? `<tspan class="callout-school" dx="10">${escapeHtml(fitSvgText(school, schoolWidth, 14))}</tspan>`
        : "";
      return `<text class="callout-person" x="${textX}" y="${y}"><tspan class="callout-name">${escapeHtml(friend.name)}</tspan>${schoolPart}</text>`;
    }).join("");
    return `
      <path class="callout-line" d="M ${anchorX.toFixed(1)} ${anchorY.toFixed(1)} L ${elbowX} ${lineY.toFixed(1)} L ${edgeX} ${lineY.toFixed(1)}"/>
      <circle class="callout-anchor-ring" cx="${anchorX.toFixed(1)}" cy="${anchorY.toFixed(1)}" r="5" fill="${theme.mapBackground}" stroke="${color}"/>
      <circle cx="${anchorX.toFixed(1)}" cy="${anchorY.toFixed(1)}" r="1.8" fill="${color}"/>
      <circle cx="${edgeX}" cy="${lineY.toFixed(1)}" r="3.5" fill="${color}"/>
      <text class="callout-region" x="${textX}" y="${(entry.top + 24).toFixed(1)}" fill="${color}">${escapeHtml(fitSvgText(entry.group.region, 180, 24))}</text>
      <text class="callout-count" x="${textEnd}" y="${(entry.top + 23).toFixed(1)}" text-anchor="end">${entry.group.count} 人</text>
      ${people}`;
  }).join("");
}

function createCalloutPosterSvgDocument(theme) {
  const layout = planCalloutLayout(groupFriendsForRoster());
  const mapSvg = createExportMapSvg(theme);
  mapSvg.setAttribute("x", String(layout.mapX));
  mapSvg.setAttribute("y", String(layout.mapY));
  mapSvg.setAttribute("width", "1000");
  mapSvg.setAttribute("height", "560");
  const mapSource = new XMLSerializer().serializeToString(mapSvg);
  const cityCount = new Set(friends.map(friend => friend.city)).size;
  const sloganElement = mapSlogan
    ? `<text class="poster-slogan" x="800" y="${layout.height - 32}">${escapeHtml(mapSlogan)}</text>`
    : "";
  const sideHeight = layout.height - 198;
  const source = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${layout.width}" height="${layout.height}" viewBox="0 0 ${layout.width} ${layout.height}" role="img" aria-labelledby="posterTitle posterDescription">
  <title id="posterTitle">${escapeHtml(mapTitle)}</title>
  <desc id="posterDescription">中央为中国地图，${friends.length} 位同学按地区分列两侧，并通过虚线连接对应地点。</desc>
  <style>
    text{font-family:"PingFang SC","Noto Sans CJK SC","Microsoft YaHei",sans-serif}
    .poster-bg{fill:${theme.mapBackground}}.poster-side{fill:${theme.rosterBackground};opacity:.72}.poster-frame{fill:none;stroke:${theme.line};stroke-width:1.5}
    .poster-corner{fill:none;stroke:${theme.accent};stroke-width:3;stroke-linecap:round}.poster-diamond{fill:${theme.mapBackground};stroke:${theme.accent};stroke-width:2}
    .poster-separator{stroke:${theme.line};stroke-width:1;stroke-dasharray:2 7}.poster-title{fill:${theme.ink};font-family:"STKaiti","KaiTi","Songti SC",serif;font-size:46px;font-weight:700;text-anchor:middle;letter-spacing:1px}
    .poster-summary{fill:${theme.muted};font-size:17px;text-anchor:middle;letter-spacing:2px}.poster-rule{stroke:${theme.accent};stroke-width:3;stroke-linecap:round}
    .callout-line{fill:none;stroke:${theme.muted};stroke-width:1.2;stroke-dasharray:2 5;stroke-linecap:round}.callout-anchor-ring{stroke-width:1.5}.callout-region{font-family:"STKaiti","KaiTi","Songti SC",serif;font-size:24px;font-weight:700}
    .callout-count{fill:${theme.muted};font-size:13px}.callout-person{fill:${theme.ink};font-size:16px}.callout-name{font-weight:700}
    .callout-school{fill:${theme.muted};font-size:14px}.poster-slogan{fill:${theme.accent};font-family:"STKaiti","KaiTi","Songti SC",serif;font-size:22px;font-weight:700;text-anchor:middle;letter-spacing:3px}
  </style>
  <defs>
    <radialGradient id="posterHalo">
      <stop offset="0" stop-color="${theme.cardBackground}" stop-opacity=".9"/>
      <stop offset="1" stop-color="${theme.cardBackground}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect class="poster-bg" x="0" y="0" width="${layout.width}" height="${layout.height}"/>
  <rect class="poster-side" x="16" y="128" width="284" height="${sideHeight}"/>
  <rect class="poster-side" x="1300" y="128" width="284" height="${sideHeight}"/>
  <ellipse cx="800" cy="${layout.mapY + 280}" rx="540" ry="330" fill="url(#posterHalo)"/>
  <rect class="poster-frame" x="16" y="16" width="1568" height="${layout.height - 32}" rx="2"/>
  <path class="poster-corner" d="M 16 46 V 16 H 46 M 1554 16 H 1584 V 46 M 1584 ${layout.height - 46} V ${layout.height - 16} H 1554 M 46 ${layout.height - 16} H 16 V ${layout.height - 46}"/>
  <line class="poster-separator" x1="300" y1="144" x2="300" y2="${layout.height - 70}"/>
  <line class="poster-separator" x1="1300" y1="144" x2="1300" y2="${layout.height - 70}"/>
  <text class="poster-title" x="800" y="68">${escapeHtml(mapTitle)}</text>
  <text class="poster-summary" x="800" y="100">${friends.length} 位同学 · ${cityCount} 座城市 · FOOD FRIENDS MAP</text>
  <line class="poster-rule" x1="680" y1="116" x2="920" y2="116"/>
  <rect class="poster-diamond" x="796" y="112" width="8" height="8" transform="rotate(45 800 116)"/>
  ${mapSource}
  ${buildCalloutSvg(layout, theme)}
  ${sloganElement}
</svg>`;
  return {source, width:layout.width, height:layout.height};
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadSvgDocumentAsPng(documentSpec) {
  const canvas = document.createElement("canvas");
  canvas.width = documentSpec.width;
  canvas.height = documentSpec.height;
  const context = canvas.getContext("2d");
  const image = new Image();
  image.onload = () => {
    context.drawImage(image, 0, 0, documentSpec.width, documentSpec.height);
    const link = document.createElement("a");
    link.download = exportFilename("png");
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast("PNG 图片已导出");
  };
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(documentSpec.source)}`;
}

$("#exportButton").addEventListener("click", () => {
  if (!friends.length) { toast("先添加几位饭友吧"); return; }
  downloadSvgDocumentAsPng(createCalloutPosterSvgDocument(getExportTheme()));
});

$("#exportSvgButton").addEventListener("click", () => {
  if (!friends.length) { toast("先添加几位饭友吧"); return; }
  const source = createCalloutPosterSvgDocument(getExportTheme()).source;
  downloadBlob(new Blob([source], {type:"image/svg+xml;charset=utf-8"}), exportFilename("svg"));
  toast("SVG 矢量图已导出");
});

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("food-friends-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("food-friends-theme") === "dark") document.body.classList.add("dark");

renderBaseMap();
renderCitySuggestions();
renderAll();
