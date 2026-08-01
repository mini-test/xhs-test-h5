const DIMENSIONS = {
  love: {
    name: "缺爱补偿",
    short: "缺爱补偿",
    title: "追光型小兽",
    kicker: "你渴望的不是更多爱，而是确定的爱",
    symbol: "☼",
    summary: "你很会捕捉别人态度里的温度，也容易为了留住连接而多走几步。你不是黏人，只是比别人更早学会：爱有时需要努力争取。",
    insight: "当关系出现距离，你容易先检查自己哪里做得不够，再用付出、迁就或反复确认来换回靠近。真正让你累的并不是爱人，而是不断证明自己值得被爱的过程。",
    quote: "你不必表现得更乖、更懂事，才能换来一个人留下。",
    action: "下一次想立刻补救一段关系时，先等十分钟，写下：我现在真正需要的是回应、安慰，还是一个明确答案？把需要说出来，少用付出来暗示。"
  },
  boundary: {
    name: "关系边界",
    short: "易被拿捏",
    title: "柔软让渡者",
    kicker: "你不是没有边界，只是总把关系放在边界前面",
    symbol: "≈",
    summary: "你擅长体谅，也很敏锐地知道怎样让一段关系继续运转。只是有些时候，你会把自己的不舒服放到最后才处理。",
    insight: "面对冲突，你首先考虑的往往不是“我是否愿意”，而是“拒绝以后会不会失去这个人”。于是你可能给出超过本意的解释、机会和让步。柔软是能力，但不该成为别人越界的通行证。",
    quote: "不带愤怒地说“不”，也是一种成熟的亲密。",
    action: "从一件小事开始练习延迟答应：把“可以”换成“我想一下再回复你”。给自己一个晚上，分清愿意、勉强和害怕拒绝。"
  },
  desire: {
    name: "低欲防御",
    short: "低欲防御",
    title: "静音保护者",
    kicker: "你的低欲，可能是心在帮你降低失望",
    symbol: "○",
    summary: "你最近更偏向低刺激、低期待的生活。不是毫无热情，而是经历过消耗以后，你学会先关小声音，让自己不再被过度拉扯。",
    insight: "当期待总需要付出很大代价，大脑会把“我不想要”变成一种节能方式。你可能仍然有喜欢的事，只是启动成本变高了。恢复并不需要突然振作，而需要重新获得微小、可靠的正反馈。",
    quote: "没有兴奋，不等于没有生命力；你可能只是在慢慢回电。",
    action: "今天不要制定宏大计划，只安排一件完成后会舒服5%的小事：晒十分钟太阳、吃一顿喜欢的饭，或走到楼下再回来。记录身体的变化，而不是完成度。"
  },
  safety: {
    name: "关系安全感",
    short: "安全感雷达",
    title: "雷达守夜人",
    kicker: "你总能察觉变化，也因此很难真正下线",
    symbol: "⌁",
    summary: "你对语气、回复速度和关系温差非常敏锐。这样的雷达曾经保护过你，却也可能把普通波动识别成危险，让你提前进入防御。",
    insight: "不确定比坏结果更折磨你。只要关系没有明确答案，你就容易补齐故事、预演失去，或通过反复确认获得短暂平静。你需要的不是永远在线的保证，而是可预测、可沟通的关系规则。",
    quote: "安全感不是从不担心，而是担心时仍能回到事实。",
    action: "焦虑出现时，把内容分成两列：左边写“已经发生的事实”，右边写“我脑中推测的故事”。只基于左边决定下一步。"
  },
  independence: {
    name: "假性独立",
    short: "独立铠甲",
    title: "独行铠甲者",
    kicker: "你很能扛，只是很少给别人靠近的入口",
    symbol: "◇",
    summary: "你习惯自己消化、自己解决，不愿成为任何人的负担。独立让你可靠，也让别人常常误以为你什么都不需要。",
    insight: "你可能不是不相信爱，而是更相信“只靠自己就不会失望”。于是越难的时候越安静，越需要帮助越表现得若无其事。真正稳固的独立，也包含选择性依赖和接受照顾。",
    quote: "允许被帮助，不会削弱你已经拥有的力量。",
    action: "选一个相对安全的人，只提出一个具体、低风险的请求，例如“今晚能听我说十分钟吗”。不要解释太多，也不要立刻补偿对方。"
  }
};

const QUESTIONS = [
  { d:"love", tag:"被爱方式", text:"喜欢的人突然变得冷淡，你最容易出现哪种反应？", options:[
    [0,"先观察，不急着给变化下结论"],[2,"反复回想是不是自己哪里做错了"],[3,"主动变得更体贴，想把距离拉回来"],[1,"心里难受，但会直接问清楚发生了什么"]]},
  { d:"safety", tag:"不确定感", text:"一条重要消息迟迟没有回复时，你通常会？", options:[
    [3,"频繁看手机，脑中预演各种坏结果"],[1,"有点在意，但先去做自己的事"],[2,"克制着不问，却很难真正专心"],[0,"默认对方在忙，等方便时再说"]]},
  { d:"independence", tag:"求助方式", text:"遇到一件明显超出你能力范围的事，你更可能？", options:[
    [1,"先自己试，卡住后会明确求助"],[3,"硬着头皮扛，除非别人主动发现"],[0,"直接找合适的人一起解决"],[2,"想求助，但会准备很多解释和回报"]]},
  { d:"desire", tag:"生活能量", text:"难得拥有一个完全空闲的周末，你最真实的状态是？", options:[
    [0,"有期待，想安排一件喜欢的事"],[2,"有很多想法，但最后什么也没开始"],[3,"只想躺着，连娱乐都嫌费力"],[1,"先休息，恢复后再决定做什么"]]},
  { d:"boundary", tag:"关系边界", text:"亲近的人提出一个让你不太舒服的请求，你会？", options:[
    [3,"先答应，之后独自后悔和生闷气"],[0,"说明不方便，不把拒绝等同于伤害关系"],[2,"找很多理由，希望对方自己听懂拒绝"],[1,"提出自己能接受的替代方案"]]},

  { d:"love", tag:"自我价值", text:"当别人真诚地夸奖或照顾你时，你的第一反应更接近？", options:[
    [2,"开心，但很快怀疑对方是不是客气"],[0,"自然接受，也愿意表达感谢"],[3,"想马上做点什么还回去，否则不踏实"],[1,"有点不习惯，但愿意让这份好意停留"]]},
  { d:"boundary", tag:"冲突反应", text:"关系发生争执时，你最担心的通常是什么？", options:[
    [0,"问题一直不解决，影响之后相处"],[3,"对方因此离开，所以宁愿先妥协"],[1,"彼此说出伤人的话，破坏基本尊重"],[2,"自己显得难相处，于是压住真实意见"]]},
  { d:"desire", tag:"兴趣变化", text:"面对以前很喜欢、现在却提不起劲的事情，你会怎么理解？", options:[
    [1,"兴趣会变化，先找找新的刺激"],[3,"好像什么都没意思，也不太想追究原因"],[0,"允许自己暂停，同时留意精力和情绪"],[2,"责怪自己变懒，却依旧很难行动"]]},
  { d:"safety", tag:"关系确认", text:"一段关系迟迟没有明确定位，你会？", options:[
    [2,"不断从细节判断对方到底怎么想"],[0,"在合适时机直接确认彼此预期"],[3,"表面顺其自然，内心长期悬着"],[1,"给自己设一个观察期限，到点再决定"]]},
  { d:"independence", tag:"情绪表达", text:"心情很差时，朋友问你“怎么了”，你更常回答？", options:[
    [3,"没事，我自己缓缓就好"],[1,"现在有点乱，等我想清楚再和你说"],[0,"确实不太好，你能陪我一会儿吗"],[2,"轻描淡写说一点，怕讲多了给人添麻烦"]]},

  { d:"love", tag:"关系投入", text:"当你很在乎一段关系时，你容易怎么做？", options:[
    [3,"提前满足对方需要，希望自己变得不可替代"],[1,"愿意投入，同时保留自己的节奏"],[2,"对方一退，我就忍不住加倍靠近"],[0,"表达喜欢，也观察双方是否同样投入"]]},
  { d:"safety", tag:"稳定需要", text:"下面哪种关系最让你安心？", options:[
    [0,"彼此信任，各自忙时也不怀疑关系"],[2,"每天保持固定联系，重要行程互相知道"],[1,"有问题能及时说开，不积累猜测"],[3,"对方经常主动证明我很重要"]]},
  { d:"desire", tag:"未来期待", text:"想到半年后的生活，你更接近哪种感觉？", options:[
    [3,"没有具体画面，也不太期待变化"],[1,"有些不确定，但还有想尝试的事情"],[2,"想变好，却觉得启动任何改变都很累"],[0,"能想到至少一件值得期待的事"]]},
  { d:"boundary", tag:"底线表达", text:"别人用“开玩笑”触碰你的痛点时，你通常会？", options:[
    [2,"陪着笑，之后慢慢疏远"],[0,"当场平静说明这个玩笑让我不舒服"],[3,"担心扫兴，假装完全不在意"],[1,"先制止，之后私下解释原因"]]},
  { d:"independence", tag:"接受照顾", text:"生病或状态很差时，有人提出照顾你，你会？", options:[
    [2,"想接受，但反复确认会不会太麻烦"],[0,"说清自己需要什么，也尊重对方能力"],[3,"本能拒绝，觉得一个人更省事"],[1,"接受一部分，其他事情自己处理"]]},

  { d:"love", tag:"失去连接", text:"一段重要关系结束后，你最容易陷入哪种想法？", options:[
    [1,"很遗憾，但关系结束不等于我不值得"],[3,"如果当时我做得更好，也许对方不会走"],[2,"特别想知道对方有没有后悔失去我"],[0,"允许难过，也会复盘双方是否真正合适"]]},
  { d:"boundary", tag:"反复原谅", text:"一个人多次让你失望，却总说“下次会改”，你更可能？", options:[
    [3,"再给一次机会，怕自己太绝情"],[1,"看实际行动，给一次明确期限"],[0,"根据重复模式作决定，而不是听承诺"],[2,"嘴上说最后一次，实际很难离开"]]},
  { d:"safety", tag:"关系波动", text:"伴侣情绪明显不好，却说“和你没关系”，你会？", options:[
    [3,"很难相信，继续追问直到得到确认"],[0,"表达关心，同时尊重对方暂时不说"],[2,"表面离开，心里一直猜是不是自己导致的"],[1,"约定晚一点再聊，然后先处理自己的情绪"]]},
  { d:"desire", tag:"消费欲望", text:"看到曾经很想买的东西，现在的你更可能？", options:[
    [0,"判断是否仍然喜欢，需要就购买"],[3,"连点开的欲望都没有，觉得都差不多"],[1,"兴趣变淡了，把预算留给更重要的事"],[2,"想靠购物提振情绪，但付款前又觉得没意义"]]},
  { d:"independence", tag:"承担习惯", text:"当工作和生活同时失控时，你通常怎样撑过去？", options:[
    [3,"不告诉任何人，等一切结束再说"],[1,"自己负责核心部分，也会分配可求助的事项"],[2,"希望有人发现，但被问时又说没事"],[0,"尽早告诉可信任的人，并提出具体需求"]]},

  { d:"love", tag:"被爱证明", text:"哪种情况最容易让你觉得“自己不重要”？", options:[
    [2,"对方没有注意到我的情绪变化"],[0,"不会用单一事件判断自己的重要性"],[3,"我付出很多，却没有得到同等回应"],[1,"重要决定中没有听到我的意见"]]},
  { d:"boundary", tag:"关系主动权", text:"对方总按自己的节奏联系你、安排见面，你会？", options:[
    [2,"尽量配合，怕拒绝后热度下降"],[1,"先配合一两次，再提出我的时间需求"],[3,"虽然不舒服，但告诉自己喜欢一个人就该迁就"],[0,"直接协商双方都能长期接受的频率"]]},
  { d:"desire", tag:"他人进度", text:"看到同龄人晒出升职、买房或结婚时，你更接近？", options:[
    [1,"偶尔比较，但很快回到自己的节奏"],[3,"没有羡慕，只觉得一切都很遥远"],[2,"焦虑一下，却又提不起力气改变"],[0,"能看见自己的感受，也分清什么是我真正想要的"]]},
  { d:"safety", tag:"意外变化", text:"原定计划临时被改变时，你通常会？", options:[
    [2,"明显不安，需要马上知道新的安排"],[0,"确认必要信息后，就调整自己的计划"],[3,"表面说没关系，心里觉得事情正在失控"],[1,"短暂烦躁，但能逐步适应变化"]]},
  { d:"independence", tag:"亲密依赖", text:"对“依赖别人”这件事，你内心最真实的看法是？", options:[
    [3,"依赖意味着把软肋交出去，最好不要"],[1,"可以依赖，但仍要保留处理问题的能力"],[2,"其实很想依赖，却怕最后失望"],[0,"健康的关系允许双方轮流支撑彼此"]]}
];

const state = { current: 0, answers: Array(QUESTIONS.length).fill(null) };
const $ = (selector) => document.querySelector(selector);
const screens = ["intro-screen", "quiz-screen", "result-screen"];

function showScreen(id) {
  screens.forEach(name => document.getElementById(name).classList.toggle("active", name === id));
  $("#reset-top").classList.toggle("hidden", id === "intro-screen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveState() {
  localStorage.setItem("innerCompassState", JSON.stringify(state));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("innerCompassState"));
    if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== QUESTIONS.length) return false;
    state.current = Math.min(saved.current || 0, QUESTIONS.length - 1);
    state.answers = saved.answers;
    return state.answers.some(answer => answer !== null);
  } catch { return false; }
}

function renderQuestion(direction = 1) {
  const q = QUESTIONS[state.current];
  const card = $("#question-card");
  card.animate(
    [{ opacity: 0, transform: `translateX(${direction * 12}px)` }, { opacity: 1, transform: "translateX(0)" }],
    { duration: 260, easing: "ease-out" }
  );
  $("#dimension-label").textContent = q.tag;
  $("#question-number").textContent = String(state.current + 1).padStart(2, "0");
  $("#question-index").textContent = `问题 ${String(state.current + 1).padStart(2, "0")}`;
  $("#question-text").textContent = q.text;
  $("#progress-fill").style.width = `${((state.current + 1) / QUESTIONS.length) * 100}%`;
  $("#back-button").disabled = state.current === 0;

  const options = $("#options");
  options.innerHTML = "";
  q.options.forEach(([score, text], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button${state.answers[state.current] === index ? " selected" : ""}`;
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-copy"></span>`;
    button.querySelector(".option-copy").textContent = text;
    button.addEventListener("click", () => selectOption(index));
    options.appendChild(button);
  });
}

function selectOption(index) {
  state.answers[state.current] = index;
  saveState();
  [...document.querySelectorAll(".option-button")].forEach((button, i) => button.classList.toggle("selected", i === index));
  setTimeout(() => {
    if (state.current < QUESTIONS.length - 1) {
      state.current += 1;
      saveState();
      renderQuestion(1);
    } else {
      renderResults(calculateScores());
    }
  }, 220);
}

function calculateScores() {
  const totals = Object.fromEntries(Object.keys(DIMENSIONS).map(key => [key, 0]));
  QUESTIONS.forEach((q, index) => {
    const answerIndex = state.answers[index];
    if (answerIndex !== null) totals[q.d] += q.options[answerIndex][0];
  });
  return totals;
}

function resultLevel(score) {
  if (score >= 13) return "很高";
  if (score >= 9) return "偏高";
  if (score >= 5) return "适中";
  return "较低";
}

function renderResults(scores, shared = false) {
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [primaryKey, primaryScore] = ranked[0];
  const result = DIMENSIONS[primaryKey];
  $("#result-symbol").textContent = result.symbol;
  $("#result-kicker").textContent = result.kicker;
  $("#result-title").textContent = result.title;
  $("#result-summary").textContent = result.summary;
  $("#result-insight").textContent = result.insight;
  $("#result-quote").textContent = result.quote;
  $("#result-action").textContent = result.action;
  $("#score-seal").textContent = Math.round(primaryScore / 15 * 100);

  const bars = $("#dimension-bars");
  bars.innerHTML = "";
  Object.entries(DIMENSIONS).forEach(([key, dimension]) => {
    const score = scores[key];
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `<div class="bar-meta"><strong>${dimension.name}</strong><span>${resultLevel(score)} · ${score}/15</span></div><div class="bar-track"><div class="bar-fill"></div></div>`;
    bars.appendChild(row);
    requestAnimationFrame(() => requestAnimationFrame(() => row.querySelector(".bar-fill").style.width = `${score / 15 * 100}%`));
  });
  showScreen("result-screen");
  if (!shared) {
    localStorage.removeItem("innerCompassState");
    history.replaceState(null, "", location.pathname);
  }
}

function startTest(resume = false) {
  if (!resume) {
    state.current = 0;
    state.answers = Array(QUESTIONS.length).fill(null);
    saveState();
  }
  showScreen("quiz-screen");
  renderQuestion();
}

function restart() {
  localStorage.removeItem("innerCompassState");
  history.replaceState(null, "", location.pathname);
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  showScreen("intro-screen");
  $("#resume-button").classList.add("hidden");
}

function encodeScores(scores) {
  return Object.keys(DIMENSIONS).map(key => scores[key].toString(16)).join("");
}

function decodeScores(code) {
  if (!/^[0-9a-f]{5}$/i.test(code)) return null;
  const values = code.split("").map(v => parseInt(v, 16));
  if (values.some(v => v > 15)) return null;
  return Object.fromEntries(Object.keys(DIMENSIONS).map((key, i) => [key, values[i]]));
}

async function shareResult() {
  const scores = calculateScores();
  const primary = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
  const url = new URL(location.href);
  url.search = `?r=${encodeScores(scores)}`;
  const shareData = {
    title: `我的内在保护模式是「${DIMENSIONS[primary].title}」`,
    text: `${DIMENSIONS[primary].kicker}。来测测你的内在保护方式：`,
    url: url.toString()
  };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`);
      showToast("结果链接已复制");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("分享失败，请复制当前网址");
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

$("#start-button").addEventListener("click", () => startTest(false));
$("#resume-button").addEventListener("click", () => startTest(true));
$("#back-button").addEventListener("click", () => {
  if (state.current > 0) { state.current -= 1; saveState(); renderQuestion(-1); }
});
$("#restart-button").addEventListener("click", restart);
$("#reset-top").addEventListener("click", restart);
$("#share-button").addEventListener("click", shareResult);

const sharedResult = decodeScores(new URLSearchParams(location.search).get("r") || "");
if (sharedResult) renderResults(sharedResult, true);
else if (loadState()) $("#resume-button").classList.remove("hidden");

