# Agent 创意系统：超越 99% 常规配置的证据、架构与评测方案

**研究快照：2026-08-15（Asia/Singapore）**  
**目标：** 把“更有创意”从一句提示词，改造成可训练、可消融、可复现、可持续校准的 Agent 系统。

## 技术摘要

截至 2026 年 8 月，最可信的结论不是“写一份更长的 Soul”或“把 temperature 调高”，而是构建一个有明确相位、专门创意知识库、算子、搜索、反同质化、盲审和人类品味学习闭环的系统。长期竞争壁垒不是提示词，而是**创意知识图谱 × 用户品味数据 × 真实实验结果 × 领域隐藏评测集**。

推荐的核心栈是：

1. **人先于 AI 留下原始种子**，避免过早被模型的高概率答案锚定；
2. **显式分离发散与收敛**，先探索，再验约束；
3. **用结构化重组与远距联想算子**，而不是只要求“更大胆”；
4. **维持候选种群差异**，通过多模型、跨语言、跨模态和语义去重扩大搜索面；
5. **3 个独立批评者 + 私有修订 + 2–3 轮**，防止群体讨论把答案磨平；
6. **建立专门的创意知识库**，存储机制、算子、抽象结构、反模式、跨域关系、品味信号与实验结果；
7. **Soul 只负责品味、价值和声音**；方法放进可调用的 Creative Skills；
8. **以人的盲评为最终信号**，自动指标只做检索、筛选和诊断；
9. 有开放权重和数据时，再加 **创意偏好优化或权重空间控制**。

“全网前 1%”不能靠主观宣称。可操作定义应是：在预注册任务集、等成本、盲评、留出题上，相对 100 个代表性配置，至少 99 个配置的“本系统更优”后验概率达到 95%，且质量、事实性与风格一致性不低于门槛。

## 关键发现与量化证据

| 机制 | 论文中的量化结果 | 应用结论 | 证据边界 |
|---|---:|---|---|
| 发散→收敛分相 | CreativeDC 相对 CoT：语义新颖度约 **+63.5%**；相对 Base **+51.5%**，效用约 **90.9%**，与基线差异不显著 | 这是 API 级最值得先部署的改造 | 单一编程题生成域，Qwen3-235B |
| 结构化讨论 | GPT-4.1：迭代讨论创意得分 **0.308 vs 0.212，+45.3%** | 讨论结构比“多给 token”重要 | 6 个应用问题；预印本 |
| 团队数量 | 3→6 agents：总体创意无显著提升；新颖度上升但效用下降 | 默认 3 个强角色，不堆人数 | 同上 |
| Persona / Soul | 无 Persona 0.269；不同 Persona 0.267，p=.803；Persona 提高效用但降低新颖度 | Soul 是约束与品味，不是发散引擎 | 同上 |
| 结构化重组 | DishCOVER 平均成对相似度 **0.387/0.402**，GPT-4o 为 **0.659/0.731**；高新颖且有价值方案 32 vs 5 | 把书籍方法编译为“表示+算子+解码” | 菜谱域；人评一致性偏低 |
| 跨语言思维 | 非英语思维使多样性提高约 **5.3–7.7 个点**，质量下降 **1.0–2.2 点**；思维语言距离与多样性相关 r=.72–.88 | 作为候选分支，不作为最终输出 | 15 种语言；推理模型；ACL 2026 |
| 跨模态视图 | 文本视图：新颖率 32.7%→68.7%，正确率 93.8%→76.6%；图像视图新颖率 57.2%、正确率 82.5% | 远距素材有效，但必须接事实/约束验证器 | 909,500 输出；任务特定 |
| 延迟 AI 介入 | 60 人实验：AI 从一开始介入减少原创想法、创意自我效能和自我归因；先独立构思再用 AI 更好 | 用户先给 3–7 个粗糙种子，再启动 Agent | 健康议题写作任务 |
| 人机同质化 | 33 人、1,271 个想法：ChatGPT 条件组间语义差异 0.24 vs Oblique Strategies 0.28，d=.47；但个人想法数量约 +15%、类别 +27% | Agent 会提升流畅度，但可能制造“集体平均答案” | 早期 ChatGPT；无质量评分 |
| 专家级创作差距 | 10 位创意写作专家评 48 篇故事：LLM 通过 TTCW 测试的数量比专业作者低 **3–10 倍** | 顶级系统必须对抗陈词滥调、道德化结尾和结构同质化 | 2024 模型；短篇小说 |
| LLM 评审不稳 | EACL 2026：同一 Judge 同一实例重复三次仅 **40%** 一致；LitBench 最强通用 Judge 与人偏好约 **73%** 一致，专训后约 **78%** | LLM 只能做筛选器，不能当最终裁判 | 跨域差异明显 |
| 创意偏好训练 | CRPO 使用 20 万+人类创意回答、30+心理测验；8B/7B 模型在自动和人评中超过多种强基线，并在 NoveltyBench 新颖度 SOTA | 开放权重阶段优先做多维偏好优化 | 英文、小模型；绝对外推有限 |
| 权重空间控制 | CreativityNeuro：DAT 最多约 **+14 个真人百分位**；720 人评，原创性 d≈.36–.40、惊奇度 d≈.43；AUT 效用下降 | 研究型增强层；要做质量护栏 | 2026-07 预印本、开放权重模型 |

这些结果共同说明：**新颖度、质量、效用、多样性和风格不是同一轴。** CreativityPrism 在 8 个任务、17 个指标、17 个模型上也发现，跨域的新颖度相关性弱；“高多样”甚至可以伴随“低新颖”。因此，任何单一 Creativity Score、DAT、Perplexity 或 Arena 排名都不足以决定系统是否真的更有创意。

## 作用机制：为什么普通 Agent 会趋同

普通配置通常同时犯四个错误：

1. **同源采样：** 同一个模型、相同上下文、相似解码，候选只是措辞变化；
2. **过早闭合：** 生成和评判在同一条思维链发生，模型在第一个可接受答案上停下；
3. **多数偏见：** 固定 Persona 或群聊迅速形成一致意见，少数派路线被压掉；
4. **评测错位：** 用流畅、详细、像专业作品来代替真正的新颖和价值。

真正的创意搜索更像“产生有差异的种群，再经过多目标选择”，而不是“让一个人格更灵感充沛”。

## 推荐架构：CreativeOS-99

### 1. 人类意图与原始种子层

在 Agent 给任何建议前，先记录用户的 3–7 个粗糙方向、不可妥协项、喜欢/厌恶样例及原因。它既保护人的原创性，也把后续微调信号变成可追踪数据。

### 2. Soul：品味宪法，不是方法仓库

Soul 建议控制在 250–500 字，包含：

- 对“好作品”的判断；
- 允许追求的张力与风险；
- 绝不接受的陈词滥调、语气和伦理越界；
- 面对质量与新颖冲突时的默认取舍；
- 声音、节奏、幽默和直率程度。

不要把 SCAMPER、TRIZ、故事结构、评审流程都塞进 Soul。官方 Agent 文档也把 SOUL 定义为声音、语调、观点和边界；长而模糊的 Soul 会污染每个任务的上下文。更重要的是，大规模实验显示固定 Persona 并不自动提高创意，反而可能降低新颖度。

### 3. 专门创意知识库：Creative Genome

它不是“把书、论文和案例做成向量库”，而是一个阶段感知的创意搜索空间。保存原子化机制、可执行算子、作品深层结构、陈词滥调、跨领域类比、用户品味和每次实验的真实效果。发散前只提供抽象结构、问题和遥远机制；完整案例延迟到收敛和近邻检查阶段，避免过早固定。

### 4. Creative Skills：可调用的“创意算子”

每个 Skill 不应只是书摘，而应包含以下字段：

```yaml
name: bisociation_bridge
trigger: 当前候选语义聚类过密，或缺乏非显然联系
input: 问题、目标受众、约束、已有候选
representation: 概念图/功能树/叙事状态图
operators: 远距领域抽样、属性映射、矛盾反转、结构合并
diverge_budget: 12 个独立候选
converge_rule: 新颖×效用几何均值；事实性硬门槛
anti_patterns: 仅换皮、随机拼贴、陈词滥调、解释替代作品
stop: 语义覆盖增益 <5% 连续两轮
tests: 3 个正例、2 个反例、1 个对抗例
```

Skill 的核心价值在“何时调用、如何表示、执行什么变换、何时停止、如何验收”。把理论名写在提示词里，不等于实现了理论。

### 5. 发散引擎

默认一次生成 16–24 个候选，分成互不看答案的分支：

- 4 个结构化重组分支；
- 4 个远距联想/类比分支；
- 4 个跨语言思维、中文交付分支；
- 4 个反事实/矛盾驱动分支；
- 可选 4–8 个跨模态或异构模型分支。

高温只在分支内部有限使用。温度与新颖度通常只有弱相关，却更容易提高不连贯；它是扰动参数，不是创意策略。

### 6. 多样性维持与新颖度筛选

先做语义嵌入、聚类和近邻检索，删除“相同思想的不同说法”。保留每个簇的代表和离群候选。建议同时记录：

- 语义熵或 Vendi Score（候选集覆盖）；
- 与内部语料、公开检索语料的最近邻相似度；
- 结构模板重复率；
- 每个创意算子的边际覆盖增益。

自动新颖度只用于导航，不能替代专家判断。EACL 2026 的跨域分析显示，困惑度更像流畅度，n-gram 创意指数更像词汇多样性，结构模板在公式化领域失效。

### 7. 盲审式收敛

设置 3 个批评者：

1. **Novelty critic：** 找常见套路、近邻和伪创新；
2. **Coherence/constraint critic：** 检查因果、结构、事实和任务要求；
3. **Audience/taste critic：** 预测目标受众反应，并按用户 Soul 取舍。

批评者只看匿名候选，不看作者/模型；创作者收到定向批评后各自私有修订，不看其他修订稿。通常 2–3 轮足够：现有研究中 3 个 Agent、3 轮附近达到峰值，继续增加容易同质化或过度优化。

### 8. 人类品味学习

用户每轮只做高信息量选择：二选一、指出“喜欢哪一处/厌恶哪一处”、给出违反品味的原因。将反馈拆成：

- 稳定偏好 → 更新 Soul；
- 领域技法 → 更新 Skill；
- 当前项目事实/设定 → 写入项目记忆；
- 单次偶然偏好 → 不持久化。

累计 200–500 个可靠成对偏好后，可以训练轻量 Reward Model、LoRA/DPO/CRPO，或至少做检索式偏好重排序。不要把所有反馈直接堆入上下文。

## 专门的创意知识库：六库架构

普通知识库回答“我知道什么”；创意知识库必须回答“当前应连接什么、执行什么变换、哪些路线已经俗套、什么符合你的品味、历史上什么真正有效”。建议物理上可共用一个数据平台，逻辑上分成六个库：

| 子库 | 核心内容 | 典型关系/字段 | 发散阶段用途 | 收敛阶段用途 |
|---|---|---|---|---|
| 创意机制库 | 双联、概念融合、设计固定、发散/收敛等原子机制 | `supports`、`contradicts`、适用域、失效条件、证据等级 | 选择搜索范式 | 解释为何候选有效/失效 |
| 创意算子库 | TRIZ、SCAMPER、约束反转、视角迁移等可执行变换 | trigger、procedure、budget、stop、tests | 直接生成差异化候选 | 记录算子边际增益 |
| 结构与模式库 | 故事状态图、产品功能树、广告传播结构、视觉构图 | `shares_structure_with`、情绪曲线、因果图 | 重组深层结构 | 检查结构完整性和套路化 |
| 反创意库 | 陈词滥调、伪深刻句式、AI 常见结尾、换皮创新 | detection、severity、repair、近邻簇 | 仅给抽象禁区，避免反向锚定 | 检测并修复平庸模式 |
| 跨领域类比图谱 | 自然、工程、社会、艺术中的功能与机制关系 | `analog_of`、`solves`、`fails_under`、`can_replace` | 找表面遥远但结构相似的素材 | 验证类比是否成立 |
| 品味与实验库 | A/B 偏好、理由、稳定性、配置、成本和盲评结果 | winner、reasons、confidence、domain、uplift | 提供轻量审美方向 | 重排序、更新 Soul/Skill/Reward |

### 知识单元，而不是文档堆积

每条知识应被原子化并带有出处、适用领域、证据等级、失效条件、更新时间和实验表现。例如：

```yaml
operator_id: contradiction_inversion
trigger: 当前方案被两个互斥约束卡住
inputs: [problem, constraints, candidate_population]
procedure:
  - 找出核心矛盾
  - 分别极端化两个方向
  - 将一个约束从障碍变成中心机制
output_count: 6
stop: 语义覆盖增益连续两轮低于 5%
evaluation: [novelty, utility, constraint_satisfaction]
failure_modes: [novelty_without_feasibility]
provenance: 原始书籍/论文/实验记录
```

书籍、论文和作品是来源对象；Agent 检索的主体应是机制、算子和抽象结构。否则系统只会越来越擅长模仿完整范例。

### 阶段化检索：防止知识库制造固定

| 阶段 | 允许检索 | 禁止/延迟检索 | 优化目标 |
|---|---|---|---|
| 发散前 | 抽象结构、问题、算子、遥远机制、不完整刺激 | 完整优秀答案、同领域最相似作品 | 远距、结构匹配、覆盖增益 |
| 发散中 | 尚未覆盖的结构簇、相反机制、离群类比 | 会使所有分支共享同一答案的材料 | 种群差异和新增语义簇 |
| 收敛后 | 完整参考、事实资料、规范、近邻、失败案例、品味记录 | 无 | 质量、事实、效用和抄近邻风险 |

发散检索可使用如下目标函数：

\[
R_d = 0.25Rel + 0.25Remote + 0.20StructuralFit + 0.15CoverageGain + 0.15OperatorFit - 0.20Redundancy - 0.15FixationRisk
\]

这里 `Remote` 衡量领域距离，`StructuralFit` 衡量深层机制能否迁移，`CoverageGain` 衡量是否新增候选簇。收敛阶段降低 Remote 权重，提高相关性、事实性、约束和用户品味权重。

### 最小数据模型与接口

第一版不必急着上复杂图数据库。Postgres + 向量索引 + 对象存储即可，待关系查询成为瓶颈再迁移图引擎。至少包含：`sources`、`mechanisms`、`operators`、`patterns`、`anti_patterns`、`concepts`、`relations`、`exemplars`、`taste_signals`、`experiments`、`project_memory`、`evaluation_tasks`。

Agent 只需要少量稳定接口：

- `retrieve_remote_analogies(problem, uncovered_clusters)`；
- `select_operators(problem, constraints, history)`；
- `retrieve_abstract_patterns(domain, exclude_near_neighbors=true)`；
- `detect_cliches_and_near_neighbors(candidate)`；
- `rank_by_personal_taste(candidates, domain)`；
- `record_experiment(config, outputs, human_votes, cost, latency)`。

### 知识库自身的量化指标

不要用“收录了多少本书”衡量。真正指标应包括：

- 机制覆盖率：目标领域的关键创意机制覆盖；
- 检索差异度：返回内容的语义距离与结构差异；
- 候选覆盖增益：检索后新增语义簇的比例；
- 算子成功率：某算子被调用后提高盲评胜率的概率；
- 固定率：最终候选过度接近检索案例的比例；
- 近邻风险率：最终输出与公开/内部作品的最高相似度；
- 知识利用率：检索内容是否实际改变了结构或决策；
- 品味预测准确率：系统预测你的 A/B 选择的准确度；
- 边际创意增益：关闭该知识模块后的盲评分下降；
- 新颖—质量交换率：每提高一个新颖度单位损失多少质量。

为每个知识节点维护经验价值：

\[
Value(k)=\frac{带来盲评胜利的次数}{被调用次数}\times 平均增益\times 跨域复现度
\]

长期无贡献、重复或高固定风险的节点应降权或进入冷库。由此，知识库不是越大越好，而是越能产生可复现的创意增益越好。

### 与 Soul、Skill 和项目记忆的边界

- **Soul**：压缩后的稳定品味宪法，约 250–500 字；
- **Skill**：可执行、可测试、可消融的思考程序；
- **创意知识库**：机制、结构、关系、素材和实验经验；
- **项目记忆**：当前项目事实、设定、决策与未解决问题；
- **评测集**：不进入生成上下文的隐藏测试资产。

真正难复制的不是 Soul，而是经过数百次真实创作、盲评和失败复盘形成的关系网络与品味数据。

## 创意书籍：从“书摘”编译成算子

| 书/方法 | 可编译的核心 | 最佳落点 | 可操作度 1–5 | 主要风险 |
|---|---|---|---:|---|
| James Webb Young《产生创意的方法》 | 收集→消化→孵化→顿悟→验证 | 全局相位控制器 | 5 | 过于抽象，需配具体算子 |
| Arthur Koestler《创造行为》 | 双联/远距领域相交 | 结构化重组、跨域检索 | 5 | 随机拼贴失去效用 |
| Genrich Altshuller / TRIZ | 矛盾建模、40 原理、理想最终结果 | 工程/产品 Skill | 5 | 领域迁移和矛盾识别错误 |
| Bob Eberle / SCAMPER | 替代、组合、适配、修改、他用、删除、逆转 | 低成本候选扩展 | 4 | 容易产出浅层变体 |
| Edward de Bono《六顶思考帽》 | 临时切换判断视角 | 评审编排，不做固定 Persona | 4 | 角色表演压过问题本身 |
| Twyla Tharp《创意习惯》 | 仪式、素材盒、日常训练 | 项目记忆与种子库 | 4 | 对单次生成提升有限 |
| Ed Catmull《创新公司》 | Braintrust、坦率反馈、作品与作者分离 | 盲评和复盘协议 | 4 | 批评过多导致平均化 |
| Rick Rubin《创造性行为》 | 注意、敏感度、品味和删减 | Soul 与最终策展 | 3 | 哲学性强、难直接评测 |
| Ursula K. Le Guin《掌舵写作》 | 句法、节奏、视角、声音练习 | 写作领域 verifier/skill | 5 | 只适用于叙事写作 |
| Julia Cameron《艺术家之路》 | Morning Pages、解除自我审查 | 人类种子生成与反固定 | 3 | 不宜直接自动化成模板 |

最好的“读书 Skill”不是让模型扮演作者，而是：提取可观察变量 → 定义变换算子 → 写出反例 → 建立测试 → 记录何时有效。建议首批只做 12 个高质量算子，不要一次制作 100 个模糊 Skill。

## 还有哪些更强的方式

### 多模型而非多 Persona

不同训练谱系、不同语言和不同模态能提供更真实的分布差异。固定人格经常只是同一个模型的表面角色变化。建议使用 2–4 个不同模型家族，每个分支保持上下文隔离，最后统一匿名评审。

### 外部结构搜索

把候选表示为概念图、功能树、故事状态图或视觉构图图，再执行交叉、删除、替换、约束反转和最短编辑路径。结构化重组论文说明，这比 token 层面的“换一种表达”更能拓展创意空间。

### 进化式种群搜索

使用 island model：多个小种群独立演化，定期交换少量高新颖候选；选择函数同时考虑新颖、价值、风格和事实性。避免全局只保留一个“最佳答案”，否则会过早收敛。

### 偏好训练与权重控制

有开放权重时，CRPO 是目前更成体系的方向：分别注入新颖、惊奇、多样与质量信号。CreativityNeuro 则显示模型权重中存在可控制的创造性方向，但效用下降说明必须联合优化。两者都应在 API 编排稳定之后再做，不能替代工作流设计。

### 反陈词滥调记忆

建立项目级和领域级“高频套路/禁用意象/安全结尾”索引。生成前只给抽象警告，生成后做检索和批判；不要在发散前展示完整负例，否则负例也会形成锚点。

## 可量化评测体系

### 评分函数

创意不是加法积分。推荐用几何均值防止单轴作弊：

\[
C = 100 \times Q^{0.25} N^{0.25} D^{0.15} U^{0.15} V^{0.10} S^{0.10} - P
\]

其中 Q=成品质量，N=单个输出新颖度，D=候选集多样性，U=任务效用/约束满足，V=用户品味与声音一致性，S=有意义的惊奇；各项归一化到 0–1。P 是事实错误、抄近邻、安全或硬约束违规惩罚，0–20。任一硬门槛失败即淘汰，不进入综合分。

### 任务集

建立 60 个留出任务：叙事写作、品牌/广告、产品创新、视觉方向、科学/技术构想、跨域综合各 10 个。每题应包含真实受众与约束；20% 为每季度更新的隐藏题，防止提示过拟合。

### 基线池

至少 100 个代表性配置：10 个主流模型/版本 × 10 种常见策略（基础提示、长 Persona、CoT、高温、自我反思、单模型 Best-of-N、多 Agent 群聊、RAG、常见创意提示、通用 Agent）。所有配置按美元成本和时延同时做等预算比较。

### 盲评

- 先由自动指标淘汰近重复和硬约束失败，不决定冠军；
- 对前 10 个配置做随机化成对盲评，每题 3 位评审；
- 创意写作/设计使用领域专家，通用创意使用目标受众；
- 评审看不到模型、提示、成本和作者；左右顺序对消；
- 20% 样本重复以测评审稳定性；Krippendorff α < .40 时暂停结论，补充准则与培训；
- 用 Bradley–Terry 或分层贝叶斯模型估计胜率和不确定性。

### “前 1%”通过线

只在以下条件同时满足时使用“操作性前 1%”：

1. 相对 100 个预注册基线，至少 99 个的 \(P(本系统更优) \ge 0.95\)；
2. 对最强 10 个基线的平均盲评胜率下界（95% CI）≥ 60%；
3. Q、U、事实性与安全门槛不劣于最强基线超过 2 个百分点；
4. 新颖度提升在 6 个领域中至少 5 个成立，不靠单一领域拉高；
5. 新模型版本和隐藏题上的结论可复现。

这个定义不等同于“互联网上所有 Agent 的真实第 99 百分位”，但它是可审计、可重复、不会自欺的工程口径。

## 证据加权实施优先级

以下 0–100 分为本报告的工程决策分，不是论文直接给出的因果效应。计算权重：证据强度 30%、潜在增益 25%、跨域可迁移性 20%、可控性 15%、成本效率 10%。

| 改造 | 优先分 | 上手时间 | 预期作用 |
|---|---:|---:|---|
| 领域化盲评与持续反馈闭环 | 95 | 1–2 周 | 让所有优化有真实目标 |
| 发散/收敛显式分相 | 92 | 1–3 天 | 同时提升新颖与约束满足 |
| 结构化重组/远距联想算子 | 90 | 1–2 周 | 扩大概念空间而非换措辞 |
| 创意知识图谱 + 阶段化检索 | 89 | 2–4 周 | 把机制、结构、反模式和实验结果变成长期复利资产 |
| 3 Agent 盲审 + 私有修订 | 87 | 3–5 天 | 提升成品并减少群体同质化 |
| 人类先给种子、AI 延迟介入 | 86 | 当天 | 保护人的原创性和所有权 |
| 语义去重 + 多样性维持 | 85 | 1 周 | 防止 Best-of-N 伪多样 |
| 多模型/跨谱系种群 | 82 | 3–7 天 | 提供真实分布差异 |
| 跨语言思维分支 | 78 | 1–2 天 | 低成本提高候选覆盖 |
| 跨模态视图 | 74 | 1–2 周 | 大幅扩展联想，需验证器 |
| 创意偏好优化 CRPO | 73 | 3–8 周 | 权重级提升，多维可控 |
| Soul / Persona 单独使用 | 52 | 当天 | 主要改善声音与一致性 |
| 仅拆书做长提示 | 41 | 2–5 天 | 缺乏调用与验收机制 |
| 提高 temperature | 31 | 分钟级 | 扰动增大，不稳定且易失真 |
| 继续堆 Agent/轮数/token | 24 | 立即 | 成本上升，收益递减或反向 |

## 30 天验证冲刺

### 第 1–3 天：定义品味与任务

收集 25 个喜欢、25 个不喜欢的作品/答案，每个标注具体原因；冻结 60 题任务集与 100 配置基线规则。

### 第 4–7 天：建立基线

实现 Soul v0、评分 rubric、盲化与日志；跑基础 Agent、长 Persona、CoT、高温、Best-of-N 和普通多 Agent。

### 第 8–12 天：编译 12 个 Skills 与知识单元

优先实现：远距联想、双联、TRIZ 矛盾、SCAMPER、约束反转、概念合并、视角变换、叙事状态跃迁、反陈词滥调、跨语言、跨模态、结构剪枝；将首批书籍与论文拆成 100–300 个带出处、触发条件和失效条件的原子知识单元。

### 第 13–17 天：知识检索、发散与种群

上线六库最小模型、阶段化检索、16–24 分支、语义聚类、Vendi/语义熵、近邻检索和预算控制；记录每个知识节点与算子的边际新颖度贡献。

### 第 18–21 天：盲审与收敛

上线 3 个批评者、私有修订、2–3 轮上限；加入事实、版权近邻与硬约束验证。

### 第 22–25 天：消融

逐项关闭 Soul、Skills、创意知识库、阶段化检索、跨语言、多模型、盲审和用户种子，测量独立增益、交互效应、固定率、成本与时延。

### 第 26–28 天：人类盲评

聚焦前 10 个配置，做成对盲评和评审一致性分析；LLM Judge 只用于分层抽样和异常检测。

### 第 29–30 天：锁版与决策

输出 CreativeOS-99 v1、失败模式清单、每领域最优策略和下一轮训练计划。只有达到预注册阈值才宣称“操作性前 1%”。

## 主要不确定性与限制

- 2026 年的多项关键结果仍是预印本，尤其是大规模多 Agent 和权重空间创造性控制；
- 创意高度领域化，科学构想、文学、视觉设计和广告不可用同一个代理指标；
- 语义距离会奖励“离题”，质量 Judge 会奖励“像标准答案”，两者都容易被投机；
- 当前最强模型变化很快，应使用实时竞技榜和本地任务门控，不在架构里写死模型名；
- 书籍框架的优先分是工程综合判断，不是随机对照试验的效应量；
- 目前没有可信的跨域随机对照试验能证明“专门创意知识库整体”带来固定的百分比增益；其优先级来自结构化重组、跨域类比、检索时机、设计固定和个性化偏好的联合证据，必须通过消融验证；
- 任何“超越 99%”都只对清楚定义的基线总体、任务分布、预算和时间成立。

## 建议的下一步

第一，不要先写一份巨型 Soul；先搭评测、日志和六库最小数据模型。第二，把首批 8–12 本书和关键论文拆成 100–300 个原子知识单元，而不是书摘。第三，用 30 天验证阶段化检索、分相、结构化重组、跨语言种群和盲审的独立增益。第四，把你的校准变成高信息量的成对选择与原因标注，使其进入品味与实验库。第五，累计真实偏好数据后再训练 CRPO/Reward Model。

## FrontierOS v2：从创意增强到持续前沿发现

CreativeOS-99 v1 解决的是“如何比常规 Agent 更会生成和筛选”；下一阶段必须解决“当 AI 内容充满互联网后，如何持续获得尚未被模型平均化的信号”。静态 Soul、通用 Skill、书籍摘要和普通 RAG 都会快速商品化，长期壁垒应升级为：

\[
HumanRaw \times OpenEndedLineage \times MultiDimTaste \times ExecutedOutcome \times TimeSplitEval
\]

v2 增加五个连续环节：

1. **Frontier Observatory**：采集人类一手观察、新论文的反常结果、跨语言小众实践和 30/90/365 天新信号；
2. **Open-ended Archive**：用 islands、MAP-Elites、创意谱系和 Pareto 档案保留多条生态位，不只保留总分冠军；
3. **Human Taste Lab**：将品味拆为稳定的 TasteCore、项目化 TasteContext 和主动保护未知的 TasteFrontier；
4. **Reality Lab**：让候选进入读者、市场、原型或实验，并在 1 周、1 月、3 月回写结果；
5. **Learning Governor**：根据来源、Judge 分歧、人的理由和执行结果更新知识节点、算子、搜索预算与品味模型。

专门创意知识库同步升级：所有材料采用 H0/H1/M0/M1 来源分层；保留原件而不只保存摘要；用“功能—机制—迁移条件—失败条件”检索跨域关系；每个候选保存父节点、算子、模型配置、人类理由、现实结果与后代。评分保留七维向量 \(F(x)=[Q,N_t,N_s,D,T,E,P]\)，不压成单一 Reward；高质量但高分歧、暂时无法解释却有吸引力的候选进入 `interesting_uncertain` 档案。

完整的证据、架构、数据协议和路线已独立版本化：

- [FrontierOS v2 完整架构](../docs/frontier-os-v2.md)
- [Human Taste Protocol](../docs/human-taste-protocol.md)
- [90 天实施路线](../docs/90-day-roadmap.md)
- [v2 新增一手论文证据](../docs/references.md)
- [来源分层 Schema](../schemas/provenance-tier.schema.json)
- [品味事件 Schema](../schemas/taste-event.schema.json)
- [创意候选与谱系 Schema](../schemas/creative-candidate.schema.json)

v2 的核心判断是：人类不应只在最后批准作品。人选择值得追求的问题，贡献生活与现场的异质性，指出应保护的异常，并在低保真阶段锁定关键决定；AI 扩张搜索、维护谱系、发现跨域关系、量化不确定性和执行验证。只有两者形成这个闭环，系统才可能在模型越来越同质、合成内容越来越多的环境中持续走在前沿。

## 进一步问题

1. 你最想领先的前三个创作域是什么：写作、视觉、品牌、产品、科学构想、代码/游戏，还是其他？
2. 你愿意为单次“冠军级”作品投入多少美元、多少分钟和多少次人工选择？
3. 哪些审美偏好应永久写入 Soul，哪些只属于当前项目？
4. 你能否提供 50–200 个“喜欢/不喜欢 + 原因”的真实样本，作为第一批品味数据？
5. 系统的最终目标是提升你的创作、独立替你创作，还是形成可复制给团队的创意平台？

## 主要论文与一手资料

- [CreativityPrism: A Cross-Domain Evaluation Framework for Holistic Assessment of LLM Creativity](https://arxiv.org/html/2510.20091v3)
- [Assessing the Creativity of Large Language Models](https://arxiv.org/html/2605.13450v1)
- [Multi-agent AI systems outperform human teams in creativity](https://arxiv.org/html/2605.17885v1)
- [Divergent-Convergent Thinking in Large Language Models for Creative Problem Generation](https://arxiv.org/html/2512.23601v1)
- [Enhancing LLM Creativity through Structured Recombination](https://aclanthology.org/2026.tacl-1.20/)
- [CreativityNeuro: Weight-Space Steering of LLM Creativity](https://arxiv.org/html/2607.01433v1)
- [Automated Creativity Evaluation Across Open-Ended Tasks](https://arxiv.org/html/2606.11762v1)
- [Language of Thought Shapes Output Diversity in Large Language Models](https://aclanthology.org/2026.acl-long.628/)
- [Multi-Novelty: Augmenting LLM Creativity via Textual and Visual Views](https://arxiv.org/html/2502.12700v1)
- [LLM Review: Enhancing Creative Writing via Blind Peer Review](https://arxiv.org/pdf/2601.08003)
- [Creative Preference Optimization](https://aclanthology.org/2025.findings-emnlp.509/)
- [Rethinking Creativity Evaluation: A Critical Analysis](https://aclanthology.org/2026.eacl-long.297/)
- [LitBench: A Benchmark and Dataset for Reliable Evaluation of Creative Writing](https://aclanthology.org/2026.eacl-long.362/)
- [Timing Matters: How Using LLMs at Different Timings Influences Writers](https://arxiv.org/pdf/2502.06197)
- [Homogenization Effects of Large Language Models on Human Creative Ideation](https://arxiv.org/html/2402.01536)
- [Generative AI enhances individual creativity but reduces collective diversity](https://www.science.org/doi/10.1126/sciadv.adn5290)
- [Art or Artifice? Large Language Models and the False Promise of Creativity](https://arxiv.org/html/2309.14556v3)
- [Enhancing Creativity through Associative Thinking Strategies](https://arxiv.org/html/2405.06715v1)
- [AutoTRIZ: Artificial Ideation with TRIZ and Large Language Models](https://arxiv.org/html/2403.13002v1)
- [Multilingual Prompting for Improving LLM Generation Diversity](https://aclanthology.org/2025.emnlp-main.324/)
- [The Effect of Sampling Temperature on Problem Solving in LLMs](https://arxiv.org/abs/2405.00492)
- [OpenClaw SOUL guide](https://docs.openclaw.ai/concepts/soul)
- [Arena Creative Writing leaderboard](https://arena.ai/leaderboard/text/creative-writing)

---

**证据标注原则：** 同行评审论文优先；预印本单独标识；论文中的效果量与本报告的工程优先分严格分开；所有跨域外推均视为推断，而非已证实因果。
