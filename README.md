# TexFlow

> **Write visually. Typeset with LaTeX.**

**TexFlow is a visual, structured academic writing environment powered by LaTeX.**

Write your paper like you would in a modern word processor. Add equations, citations, figures, tables, footnotes, and document structure visually.

TexFlow handles the LaTeX underneath.

No `\section{}`.  
No `\begin{figure}`.  
No fighting with BibTeX just to cite a paper.

**Just write.**

> **Public Preview · macOS · Apple Silicon**

---

## See TexFlow in Action

<p align="center">
  <img src="assets/texflow-demo.gif" width="100%" alt="TexFlow Demo">
</p>

<p align="center">
  <b>Visual writing on the left. LaTeX-quality PDF on the right.</b>
</p>

---

## Why TexFlow?

LaTeX is great at typesetting.

Writing LaTeX is not always great at writing.

A simple academic document can quickly turn into:

```latex
\section{Theory}

Previous research suggests that...

\begin{equation}
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
\end{equation}

As argued by \textcite{fearon1995}...
```

TexFlow lets you work with what those commands actually **mean**:

```text
Theory

Previous research suggests that...

Equation 1

Fearon (1995)
```

Underneath, TexFlow still generates and compiles LaTeX.

You get the typesetting system without having to make the typesetting language your writing interface.

---

# Built for Academic Writing

TexFlow treats a paper as more than a page full of formatted text.

A paper has structure.

```text
Paper
│
├── Introduction
│   ├── Paragraph
│   └── Citation
│
├── Theory
│   ├── Paragraph
│   ├── Equation
│   └── Footnote
│
├── Data
│   └── Figure
│
├── Results
│   └── Table
│
└── Conclusion
```

TexFlow makes that structure visible and directly editable.

Move a section, and its numbering follows.

Move a paragraph, equation, figure, or table, and the document structure follows.

The idea is simple:

> **You decide what something is. TexFlow handles how it should be typeset.**

---

# Features

## Visual Academic Writing

Write in a familiar visual editor instead of editing LaTeX source.

TexFlow supports:

- Rich text editing
- Document titles
- Multi-level headings
- Structured paragraphs
- Fonts and typography
- Footnotes
- Drag-and-drop editing
- Keyboard shortcuts
- Undo and redo
- Local document saving

The editor is designed for writing rather than programming.

---

## Document Map

Long papers should not require endless scrolling.

TexFlow's **Document Map** gives you a structural view of your paper:

```text
1 Introduction
   Research question
   Wendt (1992)

2 Theory
   Bargaining framework
   Equation 1

3 Data
   Figure 1

4 Results
   Table 1

5 Conclusion
```

Use it to:

- Navigate between sections
- Locate citations
- Find equations
- Find figures and tables
- Reorganize document structure
- Drag content between sections
- Rename document elements

Instead of treating your paper as a continuous stream of pages, Document Map treats it as a structured academic document.

---

## Mathematical Equations

Insert and edit mathematical equations visually while keeping LaTeX-quality mathematical typesetting.

For example:

```latex
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
```

can be inserted as a mathematical object without requiring the rest of the document to be written as LaTeX source.

TexFlow supports mathematical writing while leaving the final typesetting to LaTeX.

---

## Citations without the BibTeX Headache

Academic citations should feel like part of writing — not a programming task.

TexFlow lets you:

- Paste BibTeX
- Import `.bib` files
- Add references manually
- Manage references locally
- Insert citations visually
- Edit and remove citations
- Generate bibliographies automatically

Instead of seeing:

```text
@wendt1992anarchy
```

you work with:

```text
Wendt (1992)
```

TexFlow handles the citation key, BibTeX data, bibliography processing, and LaTeX commands underneath.

### Citation Styles

Current citation workflows include:

- Chicago Author-Date
- Chicago Notes & Bibliography
- APA 7
- MLA 9

Bibliography processing is handled locally through the LaTeX toolchain.

---

## Figures & Tables

Figures and tables are treated as academic document objects rather than just things placed on a page.

### Figures

Add:

- Local images
- Captions
- Labels
- Size settings
- Alignment
- References

### Tables

TexFlow supports different table workflows, including:

- Academic LaTeX-style tables
- Grid-style tables
- Captions
- Labels
- Row and column editing
- Alignment

TexFlow translates these visual objects into the corresponding LaTeX structure.

---

## Live PDF Preview

Write visually while keeping the final typeset document beside you.

```text
Visual Editor
      ↓
Structured Document
      ↓
Generated LaTeX
      ↓
Tectonic
      ↓
PDF
```

The editor and PDF are two views of the same document:

> **One optimized for writing. One optimized for typesetting.**

The editor does not need to imitate a sheet of paper.

The PDF shows what the final paper actually looks like.

---

## LaTeX Underneath

TexFlow does not replace LaTeX with a simplified typesetting engine.

It uses LaTeX as the typesetting foundation.

The difference is the interface.

Traditional workflow:

```text
Writer
  ↓
LaTeX Commands
  ↓
TeX Engine
  ↓
PDF
```

TexFlow:

```text
Writer
  ↓
Visual Editor
  ↓
Structured Document
  ↓
Generated LaTeX
  ↓
Tectonic
  ↓
PDF
```

LaTeX remains available as an export format.

You are not locked into TexFlow.

---

## Chinese & English Academic Writing

TexFlow is designed for multilingual academic writing.

Current support includes:

- English academic documents
- Simplified Chinese academic documents
- Mixed Chinese-English writing
- Unicode text
- Mathematical content in multilingual documents
- Open-source Chinese and English fonts
- User-imported fonts

For example:

> International institutions may alter states' strategic incentives.

and:

> 国际制度可能改变国家在战略互动中的激励结构。

can exist in the same academic workflow.

---

## Fonts & Appearance

TexFlow includes a selection of academic-friendly English and Chinese fonts.

It also supports:

- System fonts
- Custom font import
- Light mode
- Dark mode
- Eye Comfort mode
- Interface size adjustment
- Editor zoom

The Eye Comfort writing mode uses a subtle warm-paper background while leaving the generated PDF unchanged.

---

## Local-First

Your paper should not stop working because your Wi-Fi does.

Core TexFlow workflows run locally:

- Writing
- Saving
- LaTeX compilation
- Bibliography processing
- Reference management
- PDF generation
- Figures and tables

Tectonic and the required writing infrastructure are integrated into the desktop application.

No browser-based writing environment is required.

---

# Templates

TexFlow supports academic document templates so that **content and typesetting can remain separate**.

The idea is:

```text
                    Your Paper
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     Template A    Template B    Template C
          ↓             ↓             ↓
        PDF A          PDF B          PDF C
```

Your paper remains your paper.

The template decides how it should be typeset.

Custom LaTeX template compatibility is still being expanded during the Public Preview.

---

# Download

## macOS

The current TexFlow Public Preview supports:

- **macOS**
- **Apple Silicon**

Download the latest `.dmg` from the **Releases** section of this repository.

### Installation

1. Download the latest TexFlow `.dmg`
2. Open the disk image
3. Drag TexFlow into Applications
4. Launch TexFlow

Support for additional platforms is planned for future releases.

---

# What TexFlow Is — and Isn't

TexFlow is **not**:

- A replacement for every possible LaTeX workflow
- A visual parser for every LaTeX package ever created
- A browser-based collaborative editor
- A freeform desktop-publishing application
- An attempt to reproduce every feature of Microsoft Word

TexFlow **is** an attempt to make the most common academic writing workflow dramatically easier.

The focus is on:

- Writing
- Academic structure
- Equations
- Citations
- Figures
- Tables
- References
- Templates
- Professional typesetting

Complex custom macros, unusual packages, and highly specialized document classes may not yet be fully editable through the visual interface.

You can still export your work to LaTeX.

---

# Public Preview

TexFlow is under active development.

This is an early public release.

Some features may change.

Some workflows may still contain bugs.

Some LaTeX documents may contain structures that TexFlow does not yet understand.

That's why this is a **Public Preview**.

If something breaks, please open an Issue.

Useful bug reports include:

- What you were trying to do
- What happened
- What you expected
- Your TexFlow version
- A screenshot or minimal example

Real-world academic documents are especially useful for improving compatibility.

---

# Roadmap

## v0.2 — Structure & Layout

Planned areas include:

- More advanced visual layouts
- Improved custom LaTeX template compatibility
- Better Document Map ↔ editor navigation
- Cross-references
- More complex academic document structures
- Continued stability improvements
- Performance optimization

## Future

Possible future directions include:

- Broader platform support
- Academic metadata search
- More advanced template adaptation
- Expanded visual layout tools
- Deeper editor ↔ PDF synchronization
- Improved reference workflows

The roadmap is intentionally flexible.

TexFlow will evolve based on real-world use and user feedback rather than feature count alone.

---

# Feedback

Found a bug?

Have a strange `.tex` file?

Want TexFlow to support a particular academic workflow?

Have an idea that would make academic writing less painful?

**Open an Issue.**

Bug reports, compatibility reports, and feature suggestions are welcome.

---

# Source Code

This repository currently hosts:

- TexFlow releases
- Documentation
- Issue tracking
- Feature requests
- Community feedback

The TexFlow desktop application's core source code is currently **proprietary and is not included in this repository**.

---

# The Idea Behind TexFlow

LaTeX solved an important problem:

> **Authors should describe the structure of a document instead of manually typesetting every page.**

TexFlow asks one more question:

> **What if authors didn't have to describe that structure in code?**

That's the experiment.

**Write visually. Typeset with LaTeX.**

---

# 中文介绍

> **可视化写作，使用 LaTeX 排版。**

**TexFlow 是一款由 LaTeX 驱动的可视化结构化学术写作工具。**

你可以像使用现代文字处理软件一样完成论文写作，通过可视化方式处理：

- 论文标题与多级章节
- 正文
- 数学公式
- Citation 与参考文献
- 脚注
- 图片
- 表格
- 文档结构
- 字体与格式

而 LaTeX 代码生成、Tectonic 编译、参考文献处理以及 PDF 排版由 TexFlow 在后台完成。

不需要先学会：

```latex
\section{}
\begin{equation}
\begin{figure}
\cite{}
\label{}
\ref{}
```

再开始写论文。

> **你负责论文写什么，TexFlow 负责它怎么排。**

---

## 为什么做 TexFlow？

LaTeX 的问题并不是排版能力不够。

恰恰相反，它的排版能力非常强。

问题在于，很多用户只是想写一篇论文，却需要同时理解命令、环境、宏包、BibTeX、编译流程以及各种排版规则。

TexFlow 希望保留 LaTeX 的优势，同时改变它的交互方式。

传统 LaTeX：

```text
作者
 ↓
LaTeX 代码
 ↓
TeX
 ↓
PDF
```

TexFlow：

```text
作者
 ↓
可视化编辑器
 ↓
结构化文档
 ↓
自动生成 LaTeX
 ↓
Tectonic
 ↓
PDF
```

LaTeX 仍然存在。

只是你不需要一直看见它。

---

## Document Map

TexFlow 不仅把论文看作一串文字，而是一个具有结构的学术文档。

```text
论文
│
├── Introduction
│   ├── 正文
│   └── Wendt (1992)
│
├── Theory
│   ├── 正文
│   ├── Equation 1
│   └── Footnote
│
├── Data
│   └── Figure 1
│
├── Results
│   └── Table 1
│
└── Conclusion
```

通过左侧 **Document Map**，可以：

- 快速定位章节
- 查看 Citation
- 查看公式
- 查看图片与表格
- 拖拽调整章节顺序
- 重组论文结构

论文不再只是一个需要不断滚动的长页面。

---

## 公式

通过可视化方式插入和编辑数学公式，同时使用 LaTeX 完成最终数学排版。

无需为了插入一个公式而把整篇论文变成代码编辑体验。

---

## Citation 与参考文献

TexFlow 希望把 Citation 重新变成写作的一部分。

你可以：

- 粘贴 BibTeX
- 导入 `.bib`
- 手动添加参考文献
- 本地管理文献
- 可视化插入 Citation
- 编辑和删除 Citation

用户看到的是：

```text
Wendt (1992)
```

而不是：

```text
@wendt1992anarchy
```

当前 Citation 工作流包括：

- Chicago Author-Date
- Chicago Notes & Bibliography
- APA 7
- MLA 9

底层 BibTeX、biblatex 与参考文献编译流程由 TexFlow 处理。

---

## 图片与表格

TexFlow 将图片和表格作为学术文档对象进行处理。

支持：

- Caption
- Label
- 图片大小与对齐
- 学术风格表格
- Grid 表格
- 行列编辑
- 文档结构导航

这些内容最终由 TexFlow 转换为对应的 LaTeX 结构。

---

## 中英文写作

TexFlow 支持：

- 英文学术文档
- 简体中文学术文档
- 中英文混排
- Unicode 文本
- 数学公式
- 中英文字体
- 自定义字体导入

因此可以用于英文论文、中文论文、Research Note、课程作业、毕业论文以及中英文混排的学术文档。

---

## 本地优先

TexFlow 的核心写作流程以本地使用为基础。

以下功能均可在本地完成：

- 文档写作
- 保存
- LaTeX 编译
- Citation 与参考文献处理
- PDF 生成
- 图片与表格
- 文档结构管理

你的论文不应该因为没有网络而无法继续写。

---

## 模板

TexFlow 希望将：

> **论文内容**

和：

> **论文应该如何排版**

分开。

同一份论文未来可以通过不同模板生成不同的最终排版，而无需重新修改论文内容。

当前版本已经具备模板能力，自定义 LaTeX 模板兼容性仍在持续完善。

---

## 下载

当前 Public Preview 支持：

**macOS · Apple Silicon**

请前往本仓库的 **Releases** 下载最新 `.dmg`。

安装方式：

1. 下载 TexFlow `.dmg`
2. 打开
3. 将 TexFlow 拖入 Applications
4. 启动 TexFlow

未来计划支持更多平台。

---

## 当前状态

TexFlow 目前仍处于 **Public Preview**。

核心学术写作与排版流程已经可以使用，但复杂 LaTeX 宏包、自定义命令、特殊模板以及部分边缘场景仍可能存在兼容性问题。

如果遇到 Bug 或兼容性问题，欢迎提交 Issue。

尤其欢迎真实论文、模板和特殊使用场景的反馈。

---

## 关于源代码

本仓库目前用于：

- TexFlow 版本发布
- 文档
- Issue 追踪
- 功能建议
- 用户反馈

TexFlow 桌面应用核心代码目前暂未公开。

---

## TexFlow 的想法

LaTeX 的一个重要思想是：

> **作者应该描述文档的结构，而不是手工调整每一页的排版。**

TexFlow 想再往前一步：

> **如果作者连描述这些结构的代码都不需要写呢？**

这就是 TexFlow 正在尝试的事情。

**可视化写作，使用 LaTeX 排版。**
