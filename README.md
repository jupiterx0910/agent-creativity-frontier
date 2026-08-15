# Agent Creativity Frontier

一套面向 99th-percentile 创作能力的 Agent 研究报告、FrontierOS v2 规范与可运行交互站点。

研究快照：**2026-08-15（UTC+8）**  
在线报告：<https://agent-creativity-frontier.focus8351.chatgpt.site>

## 核心结论

真正高水平的 Agent 创作系统，不应依赖巨型 Persona、单独的 Soul、高 temperature 或简单堆叠 Agent。更可靠的方向是把创造力做成可测量、可消融、可持续学习的系统：

1. 人类先提供原创种子与不可妥协项；
2. Soul 负责稳定的品味、价值与声音；
3. 专门创意知识库提供机制、算子、结构、反模式、跨域类比和实验数据；
4. 显式分离发散与收敛；
5. 用结构化重组、多样性维持和盲审控制同质化；
6. 将用户反馈转化为成对偏好、知识节点价值和隐藏评测结果。

仓库中的基础报告给出了六库架构、阶段化检索、量化指标、论文证据台账、书籍算子化方案、30 天验证路线，以及“超越 99% 常规 Agent 配置”的可审计统计定义。FrontierOS v2 在此基础上增加了：前沿信号发现、来源纯度分层、开放式创意谱系、多维人类品味、真实执行反馈、时间切分评测和 90 天建设路线。

## FrontierOS v2

模型、Soul、提示词和静态书库会逐步商品化。下一阶段真正难复制的能力是：

> 人类原生信号 × 开放式创意谱系 × 多维人类品味 × 真实执行结果 × 时间切分隐藏评测

系统不再只问“本轮哪一个答案最好”，而是持续回答四个问题：哪些新信号尚未进入模型平均先验；哪些暂时不成熟的路线值得保留；人的品味在哪些维度上稳定或变化；哪些创意经过真实世界后仍然成立。

- [FrontierOS v2 完整架构](docs/frontier-os-v2.md)
- [人类品味协议](docs/human-taste-protocol.md)
- [90 天实施路线](docs/90-day-roadmap.md)
- [新增论文证据台账](docs/references.md)

## 仓库结构

```text
.
├── report/
│   └── agent-creativity-frontier-2026-08-15.md  # 完整研究报告
├── docs/
│   ├── frontier-os-v2.md                         # 持续前沿发现系统
│   ├── human-taste-protocol.md                   # TasteCore/Context/Frontier
│   ├── 90-day-roadmap.md                         # 可验收实施路线
│   └── references.md                             # v2 一手论文证据
├── schemas/
│   ├── provenance-tier.schema.json               # 来源纯度与 AI 参与度
│   ├── taste-event.schema.json                   # 人类品味反馈事件
│   └── creative-candidate.schema.json            # 创意谱系与七维结果
├── data/
│   └── artifact.json                            # 报告 manifest 与数据快照
├── worker/
│   ├── README.md                                # 生成运行时说明
│   └── generated/index.part-*.txt               # 可重组的 Worker 源码分片
├── scripts/
│   ├── build.sh                                 # 确定性构建入口
│   ├── reassemble-worker.mjs                    # 重组并校验 Worker 源码
│   ├── validate-artifact.mjs                    # Worker/托管结构校验
│   └── test-cjk-rendering.mjs                   # 中文字体与 UTF-8 回归测试
├── .github/workflows/validate.yml               # GitHub Actions 校验
├── .openai/hosting.json                         # Sites 托管配置
└── package.json
```

## 阅读报告

- [完整 Markdown 报告](report/agent-creativity-frontier-2026-08-15.md)
- [FrontierOS v2：从创意增强到持续前沿发现](docs/frontier-os-v2.md)
- [可直接实现的人类品味协议](docs/human-taste-protocol.md)
- [FrontierOS 90 天路线](docs/90-day-roadmap.md)
- [结构化报告数据](data/artifact.json)
- [在线交互版本](https://agent-creativity-frontier.focus8351.chatgpt.site)

## 本地验证

要求：Node.js 20+，无需安装第三方依赖。构建过程会按固定顺序重组 Worker 源码，并核验 SHA-256，防止分片缺失或顺序错误。

```bash
npm run test:cjk
npm run build
npm run validate
```

也可以运行完整校验：

```bash
npm run check
```

构建结果位于 `dist/`，其中 `dist/server/index.js` 导出 Cloudflare Worker 兼容的 `fetch` 方法。

## 研究边界

- 报告中的论文观察值与工程优先分严格分列；优先分不是论文效应量。
- 2026 年若干关键结果仍为预印本，结论需要在具体创作域中复现。
- “前 1%”是预注册任务、等成本基线、盲评与统计置信条件下的工程目标，不是未经测量的宣传语。
- 当前尚无可信的跨域随机对照试验能证明“专门创意知识库整体”具有固定百分比增益，因此必须进行模块消融。

## 内容更新原则

新增论文、创意算子或知识节点时，应同时记录出处、触发条件、适用范围、失效条件和测试；不要把未经验证的长书摘直接加入生成上下文。
