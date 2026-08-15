# FrontierOS v2：新增一手论文证据

**检索与核读截止：2026-08-15。** 本页只列 v2 升级直接使用的一手论文；基础报告中的发散—收敛、结构化重组、多语言、多模态、Creative Preference Optimization 与通用创意评测证据，见主报告末尾。

| 主题 | 一手资料 | 状态 | 本仓库使用方式 |
|---|---|---|---|
| 搜索策略的上限 | [Heuresis: A Benchmark for Scientific Idea Generation](https://arxiv.org/html/2606.25198v2) | 2026 预印本 | 说明搜索/重排不能单独扩张质量—新颖前沿；加入现实证据与虚构校验 |
| 关系型跨域类比 | [Analogical Reasoning for Cross-Domain Idea Generation](https://arxiv.org/html/2605.11258v1) | 2026 预印本 | 将知识库从文本近邻升级为功能—机制—迁移条件图谱 |
| 合成数据与模型坍缩 | [AI models collapse when trained on recursively generated data](https://www.nature.com/articles/s41586-024-07566-y) | Nature, 2024 | H0/H1/M0/M1 来源分层、保留人类原件、限制递归摘要 |
| 专业设计品味 | [TASTE: Benchmarking Multidimensional Designer Preferences](https://arxiv.org/html/2605.20731v1) | 2026 预印本 | 多维品味、Judge 分歧和专业人群建模，拒绝单一奖励 |
| 可学习的科学品味 | [AI Can Learn Scientific Taste](https://arxiv.org/html/2603.14473v1) | 2026 预印本 | 证明品味信号可训练，同时强调代理目标与个人品味的区别 |
| 时间切分与未来影响 | [HindSight: Evaluating Scientific Ideas with Future Evidence](https://arxiv.org/html/2603.15164v2) | 2026 预印本 | 30 个月未来窗口、时间切分隐藏评测、反对只用 LLM 新颖度评分 |
| 激励与人机共创 | [Incentives Shape Human–AI Co-Creation](https://arxiv.org/html/2604.03529v1) | 2026 预印本；预注册 RCT | 把原创性激励和选择权纳入工作流，避免逐字采用 AI 建议 |
| 渐进式共创 | [Creo: Progressive Co-Creation with Underspecified Representations](https://arxiv.org/html/2604.13956v1) | 2026 预印本 | 低保真介入、decision locks、保护人类所有权 |
| AI 到 AI 的信息漂移 | [Lost Before Translation](https://arxiv.org/html/2602.17674v1) | 2026 预印本 | 原件优先、保留引语/保留意见/证据纹理、限制顺序重写 |
| 开放式搜索与踏脚石 | [Open-Ended Image Evolution with Vision-Language Models / Picbreeder](https://arxiv.org/html/2605.23908v1) | 2026 预印本 | 谱系树、兴趣驱动踏脚石、非单目标档案 |
| 异构分布式 Agent | [AgentPanel](https://arxiv.org/html/2608.03283v1) | 2026 预印本 | 多 Agent 作为异构候选市场，不作为共识会议 |
| 预算化选择性精炼 | [Budgeted Subset Refinement](https://arxiv.org/html/2607.14118v1) | 2026 预印本 | 把预算投向多样化子集的深度验证和执行，而非平均润色 |
| AI 创新的人类瓶颈 | [A Human Bottleneck Framework for AI-Enabled Innovation](https://arxiv.org/pdf/2608.07504) | 2026 预印本 | 把问题选择、筛选测试、偏好与扩散纳入系统，而非只优化构想生成 |

## v2.1：推理、评估器与人类能力证据

| 主题 | 一手资料 | 状态 | 经校准后的使用方式 |
|---|---|---|---|
| 自适应采样 | [Turning Up the Heat: Min-p Sampling for Creative and Coherent LLM Outputs](https://arxiv.org/html/2407.01082v8) | ICLR 2025 | 作为 logits 可控模型的优先实验 sampler；同温度胜率差为 +3.36pp，不写成 +6.6pp，不外推为唯一正解 |
| 发散—收敛结构 | [Divergent-Convergent Thinking in Large Language Models](https://arxiv.org/html/2512.23601v1) | 2025 预印本 | 低成本结构基线；+51.5%/+63.5% 只属于论文的 Qwen3-235B 创意编程问题任务 |
| 去固着 prompt | [IDEAFix](https://arxiv.org/pdf/2606.00875) | 2026 预印本 | 简单类别否定/明确发散措辞优先进入实验；不据此宣布 SCAMPER、C-K 或 Design Thinking 整体无效 |
| 循环内评估器 | [Recipes for Creativity](https://arxiv.org/html/2608.07243v1) | ICCC 2026 短论文 | 证明 Judge 是第一设计变量；“小 Judge 更好”仅视为食谱 pilot 的局部结果 |
| 人类独立能力 | [Human Creativity in the Age of LLMs](https://arxiv.org/html/2410.03703v1) | 预印本；预注册实验 | 增加无 AI 前后测；不把未显著的 ideas-vs-strategies 比较写成通用定律 |
| 科学多 Agent | [VIRSCI / Many Heads Are Better Than One](https://arxiv.org/pdf/2410.09403) | 2025 预印本 | 作为科学构想的候选架构；3.78/5.24 等人评结果不外推到所有创作域 |
| Activation steering | [BILLY](https://arxiv.org/html/2510.10157v2) | 2025 预印本 | 开放权重 R&D；不作为文本 Persona 普遍有效的证据 |
| 局部创意模式 | [CreativeInstruct](https://arxiv.org/html/2608.07460) | 2026 预印本 | 研究 span-level creative mode；保留人评、结构指标与执行消融 |

## 证据解释规则

1. 论文观察值、仓库中的工程启发式和未来目标严格分开；
2. 预印本均视为待复现证据，不因日期新就自动赋予高权重；
3. 单一领域结果只支持该机制进入实验队列，不直接证明跨域收益；
4. LLM Judge、引用、语义距离和用户点击都是代理信号，必须与盲评或真实执行交叉验证；
5. 未来论文更新时保留旧版本、检索日期和结论变化，避免事后改写历史。
6. 百分点与相对百分比必须分列；派生数字明确标注 `derived`。
7. 每条关键结论使用 [`evidence-claim.schema.json`](../schemas/evidence-claim.schema.json) 保存任务、模型、评审、定位和不支持的外推。
