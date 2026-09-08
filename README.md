<p align="center">
  <img src="assets/acatex-icon.png" width="128" alt="AcaTex Logo">
</p>

<h1 align="center">AcaTex</h1>

<p align="center">
  <strong>Write visually. Typeset with LaTeX.</strong>
</p>

<p align="center">
  A visual, structured academic writing environment powered by LaTeX.
</p>

<p align="center">
  <strong>Public Preview · v0.2 · macOS · Apple Silicon</strong>
</p>

<p align="center">
  <a href="https://github.com/DarcyLuai/AcaTeX/releases/latest">
    <img src="https://img.shields.io/badge/Download-Latest%20Release-blue?style=for-the-badge" alt="Download Latest Release">
  </a>
</p>

---

## See AcaTex 

<p align="center">
  <img src="assets/Feature.png" width="900" alt="AcaTeX Features">
</p>

<p align="center">
  <strong>Write visually. Organize structurally. Let LaTeX handle the typesetting.</strong>
</p>

---

## 👀 What is AcaTex?

AcaTex is a visual academic writing environment that keeps LaTeX underneath — without making LaTeX source code your primary writing interface.

Write your paper like you would in a modern word processor.

Add visually:

- Sections
- Equations
- Citations
- Footnotes
- Figures
- Tables
- Structured layouts
- References

AcaTex handles the corresponding LaTeX structure, compilation, bibliography processing, and PDF generation in the background.

No need to begin with:

```latex
\section{}
\begin{equation}
\begin{figure}
\cite{}
\label{}
\ref{}
```

**Just write.**

---

## Why AcaTex?

LaTeX is excellent at typesetting.

Writing LaTeX is not always excellent at writing.

A normal academic document might contain:

```latex
\section{Theory}

Previous research suggests that...

\begin{equation}
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
\end{equation}

As argued by \textcite{fearon1995}...
```

AcaTex lets you work with what those commands actually mean:

```text
Theory

Previous research suggests that...

Equation 1

Fearon (1995)
```

For example:

```math
P(D)=(1-p)\left[q_N+(q_L-q_N)\pi_L\right]
```

can be inserted visually while LaTeX still handles the final mathematical typesetting.

> **You decide what the document contains. AcaTex handles how that structure becomes LaTeX.**

---

# ✨ What's New in v0.2

AcaTex v0.2 focuses on making academic documents more structured, more flexible, and more natural to edit.

---

## 🧱 Structured Visual Layouts

AcaTex now supports structured multi-column layouts.

### 50 / 50

```text
┌───────────────┬───────────────┐
│               │               │
│      50%      │      50%      │
│               │               │
│      Text     │     Figure    │
│               │               │
└───────────────┴───────────────┘
```

### 70 / 30

```text
┌──────────────────────┬────────┐
│                      │        │
│         70%          │  30%   │
│                      │        │
│         Text         │ Figure │
│                      │        │
└──────────────────────┴────────┘
```

Paragraphs, figures, tables, equations, and other document objects can be placed inside structured layouts.

AcaTex adapts the generated LaTeX depending on where an object appears.

> **Structured layout, not freeform desktop publishing.**

---

## 📝 Title, Author & Date

AcaTex now supports document-level metadata visually.

You can edit:

- Title
- Author
- Date

The date can also be hidden entirely.

Example:

```text
Beyond Frequency:
Loss Framing and the Temporal Structure of International Risk

Darcy Lu

September 8, 2026
```

These values remain semantic document metadata.

The selected LaTeX template still controls their final appearance.

---

## Document Map

AcaTex treats a paper as a structured document rather than a continuous stream of pages.

```text
Paper
│
├── Introduction
│   ├── Paragraph
│   ├── Fearon (1995)
│   └── Footnote 1
│
├── Theory
│   ├── Paragraph
│   └── Equation 1
│
├── Data
│   └── Figure 1
│
├── Results
│   └── Table 1
│
└── Conclusion
```

Document Map lets you:

- Navigate between sections
- Locate citations
- Locate equations
- Find figures and tables
- Reorganize document structure
- Drag content between sections
- Rename document objects

Clicking a section navigates directly to that part of the document.

Collapsed mode provides compact section navigation without filling the sidebar with unnecessary symbols.

---

## Drag & Drop

AcaTex uses direct manipulation for document structure.

Instead of:

```text
Move Up
Move Down
Change Position
```

you can simply drag:

- Sections
- Paragraphs
- Figures
- Tables
- Equations
- Citations

to new positions.

Inline citation movement also provides an insertion caret so citations can be moved to precise text positions.

---

## Citations without the BibTeX Headache

AcaTex keeps citation keys underneath the interface.

Instead of:

```text
@fearon1995
```

you work with:

```text
Fearon (1995)
```

or:

```text
(Fearon 1995)
```

depending on the selected citation style and citation mode.

Current citation workflows include:

- Chicago Author-Date
- Chicago Notes & Bibliography
- APA 7
- MLA 9

AcaTex can:

- Paste BibTeX
- Import `.bib`
- Add references manually
- Manage references locally
- Insert citations visually
- Edit citations
- Remove citations
- Generate bibliographies

---

## Citation Page Locators

Citation occurrences can now contain specific page locators.

For example:

```text
(Fearon 1995, 381)
```

or:

```text
(Fearon 1995, 397–99)
```

The locator belongs to that citation occurrence, not the underlying reference.

That means the same paper can be cited at different pages without duplicating the bibliography entry.

---

## Explanatory Footnotes

AcaTex now supports normal academic footnotes independently from citation notes.

For example:

```text
Tail risk is analytically distinct from conflict probability.¹
```

Footnote numbering follows document order automatically.

If footnotes are inserted, deleted, or moved, numbering updates with the document.

---

## Mathematical Equations

Insert mathematical expressions visually while preserving LaTeX-quality mathematics.

For example:

```math
\Pr(D)
=
(1-p)
\left[
q_N+
(q_L-q_N)
\frac{\rho_N}
{1-\rho_L+\rho_N}
\right]
```

AcaTex keeps equations as semantic document objects rather than ordinary text.

You do not need to manually create:

```latex
\begin{equation}
...
\end{equation}
```

for every display equation.

---

## Figures

Figures are semantic academic objects.

AcaTex supports:

- Local images
- Captions
- Labels
- Size controls
- Alignment
- Structured-layout placement
- Document Map navigation

Figure numbers are derived from document order.

The figure number and user caption are kept separate.

Example:

```text
Figure 1 — Conceptual Framework
```

rather than storing `Figure 1` as the caption itself.

---

## Tables

AcaTex supports two table styles.

### Academic Table

A cleaner LaTeX-style table suitable for academic papers.

### Grid Table

A fully bordered table similar to Word or Excel.

Tables support:

- Captions
- Labels
- Row and column editing
- Alignment
- Layout-container placement

Table numbering, captions, and internal LaTeX labels are treated as separate concepts.

---

## Text Color

AcaTex now supports basic text coloring through a lightweight visual selector.

A small palette provides several commonly used colors without requiring a full color-picker interface.

Text color is preserved in LaTeX output where supported.

---

## Live PDF Preview

AcaTex separates the writing interface from the final typeset output.

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

The visual editor does not need to imitate the final sheet of paper.

The PDF shows the final LaTeX result.

---

## LaTeX Underneath

AcaTex does not replace LaTeX with a simplified typesetting engine.

It uses LaTeX as the foundation.

### Traditional workflow

```text
Writer
  ↓
LaTeX Source
  ↓
TeX Engine
  ↓
PDF
```

### AcaTex

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

**You are not locked into AcaTex.**

---

## Templates

AcaTex supports academic document templates so that content and typesetting can remain separate.

```text
                    Your Paper
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     Template A    Template B    Template C
          ↓             ↓             ↓
        PDF A          PDF B          PDF C
```

Your content remains your content.

The template determines how that content is typeset.

v0.2 also improves compatibility with custom LaTeX templates and structured document elements.

Complex `.cls`, `.sty`, custom macros, and unusual packages may still have limited visual-editing support.

---

## Chinese & English Academic Writing

AcaTex supports multilingual academic writing.

Current support includes:

- English academic documents
- Simplified Chinese academic documents
- Mixed Chinese-English writing
- Unicode text
- Mathematical content
- Open-source Chinese and English fonts
- System fonts
- User-imported fonts

For example:

> International institutions may alter states' strategic incentives.

and:

> 国际制度可能改变国家在战略互动中的激励结构。

can exist in the same document.

Mathematics also remains available:

```math
\pi_L=\frac{\rho_N}{1-\rho_L+\rho_N}
```

---

## Fonts & Appearance

AcaTex supports:

- Academic-friendly English fonts
- Chinese fonts
- System fonts
- Custom font import
- Light mode
- Dark mode
- Eye Comfort mode
- Editor zoom
- Interface sizing

Eye Comfort mode changes the writing environment without changing the final PDF appearance.

---

## Local-First

Your paper should not stop working because your Wi-Fi does.

Core AcaTex workflows run locally:

- Writing
- Saving
- Autosave
- LaTeX compilation
- Bibliography processing
- Citation management
- PDF generation
- Figures
- Tables
- Document structure

Tectonic and the required writing infrastructure are integrated into the desktop application.

No browser-based writing environment is required for the core workflow.

---

# Download

## macOS

AcaTex v0.2 currently supports:

- **macOS**
- **Apple Silicon**

Download the latest `.dmg` from the **Releases** section of this repository.

### Installation

1. Download the latest AcaTex `.dmg`
2. Open the disk image
3. Drag AcaTex into `Applications`
4. Launch AcaTex

The macOS release is signed and notarized for external distribution.

Support for additional platforms is planned for future versions.

---

# What AcaTex Is — and Isn't

AcaTex is **not**:

- A replacement for every possible LaTeX workflow
- A parser for every LaTeX package ever created
- A freeform page-design application
- A browser-based collaborative editor
- An attempt to reproduce every feature of Microsoft Word

AcaTex **is** an attempt to make common academic writing workflows dramatically easier.

The focus is on:

- Writing
- Academic structure
- Equations
- Citations
- Footnotes
- Figures
- Tables
- Structured layouts
- References
- Templates
- Professional typesetting

Complex custom macros, specialized packages, and highly unusual document classes may not yet be fully editable visually.

You can still export your work to LaTeX.

---

# Public Preview

AcaTex v0.2 remains a **Public Preview**.

The core writing and typesetting workflow is functional, but the application is still under active development.

Some workflows may contain bugs.

Some LaTeX documents may include structures AcaTex does not yet understand.

If something breaks, please open an Issue.

Useful reports include:

- What you were trying to do
- What happened
- What you expected
- A screenshot
- A minimal `.tex` / `.bib` example where possible
- Your AcaTex version

Real academic papers and templates are especially useful for improving compatibility.

---

# Changes in v0.2

Major improvements include:

- Structured 50/50, 70/30 and related visual layouts
- Better layout-aware Figure and Table generation
- Document title, author and date controls
- Hide-date support
- Normal explanatory footnotes
- Citation page locators
- Improved Chicago Author-Date rendering
- Improved citation save/reopen behavior
- Precise citation drag insertion feedback
- Improved Document Map navigation
- Improved section and object dragging
- Functional text colors
- Improved figure numbering/caption separation
- Improved table numbering/caption/label separation
- Improved autosave behavior
- Improved template compatibility
- UI and macOS icon polish
- Numerous stability and typesetting fixes

---

# Roadmap

Future versions may continue to expand:

- Custom template compatibility
- Cross-references
- More advanced structured layouts
- Better editor ↔ PDF synchronization
- Reference workflows
- Academic metadata search
- Stability and performance
- Import/export compatibility
- Additional platform support

The roadmap is intentionally flexible.

AcaTex will evolve based on real-world use rather than feature count alone.

---

# Feedback

Found a bug?

Have a strange `.tex` file?

Want AcaTex to support a particular academic workflow?

Have an idea that would make academic writing less painful?

**Open an Issue.**

Bug reports, compatibility reports, and feature suggestions are welcome.

---

# Source Code

This repository currently hosts:

- AcaTex releases
- Documentation
- Issue tracking
- Feature requests
- Community feedback

The AcaTex desktop application's core source code is currently **proprietary and is not included in this repository**.

---

# The Idea Behind AcaTex

LaTeX solved an important problem:

> **Authors should describe the structure of a document instead of manually typesetting every page.**

AcaTex asks one more question:

> **What if authors didn't have to describe that structure in code?**

That's the experiment.

**Write visually. Typeset with LaTeX.**

---

# 中文介绍

> **可视化写作，使用 LaTeX 排版。**

**AcaTex 是一款由 LaTeX 驱动的可视化结构化学术写作工具。**


AcaTex 希望保留 LaTeX 的高质量排版能力，同时把论文写作重新变成一种更加直观的可视化体验。

你可以通过界面直接处理：

- 标题与多级章节
- 正文
- 数学公式
- Citation
- 参考文献
- 脚注
- 图片
- 表格
- 多栏结构
- 文档导航
- 字体与格式

而 LaTeX 代码生成、Tectonic 编译、参考文献处理以及 PDF 排版由 AcaTex 在后台完成。

> **你负责论文写什么，AcaTex 负责它怎么排。**

<p align="center">
  <a href="https://github.com/DarcyLuai/AcaTeX/releases/latest">
    <img src="https://img.shields.io/badge/下载-最新版本-blue?style=for-the-badge" alt="下载最新版本">
  </a>
</p>

---

## v0.2 有什么新内容？

### 结构化多栏排版

现在可以通过可视化方式创建：

```text
50 / 50
```

```text
┌───────────────┬───────────────┐
│      50%      │      50%      │
│               │               │
│      文字     │      图片     │
└───────────────┴───────────────┘
```

以及：

```text
70 / 30
```

```text
┌──────────────────────┬────────┐
│         70%          │  30%   │
│                      │        │
│         文字         │  图片  │
└──────────────────────┴────────┘
```

文字、图片、表格、公式等内容可以进入结构化布局。

AcaTex 会根据它们所在的位置自动生成合适的 LaTeX。

---

## 文档标题、作者与日期

现在可以直接在编辑器中管理：

- Title
- Author
- Date

日期也可以完全隐藏。

AcaTex 会把这些内容作为文档元数据，而不是普通正文处理。

---

## Document Map

AcaTex 将论文理解为一个结构化文档：

```text
论文
│
├── Introduction
│   ├── 正文
│   ├── Fearon (1995)
│   └── Footnote 1
│
├── Theory
│   └── Equation 1
│
├── Data
│   └── Figure 1
│
├── Results
│   └── Table 1
│
└── Conclusion
```

可以通过左侧 Document Map：

- 快速定位章节
- 查看 Citation
- 查看公式
- 查看图片
- 查看表格
- 拖拽调整内容
- 重组论文结构

---

## Citation

用户看到的是：

```text
Fearon (1995)
```

而不是：

```text
@fearon1995
```

支持：

- Chicago Author-Date
- Chicago Notes & Bibliography
- APA 7
- MLA 9

v0.2 还加入了 Citation 页码定位。

例如：

```text
(Fearon 1995, 381)
```

同一篇文章可以在不同位置引用不同页码，而不会产生重复的参考文献条目。

---

## 脚注

现在可以插入普通解释性脚注。

例如：

```text
Tail risk is analytically distinct from conflict probability.¹
```

脚注编号会根据文档顺序自动更新。

---

## 图片与表格

AcaTex 会区分：

```text
编号
Caption
Label
```

例如：

```text
Figure 1 — Conceptual Framework
```

其中：

- `Figure 1` 是自动编号
- `Conceptual Framework` 是用户 Caption
- `label` 是内部交叉引用 ID

三者不会混在一起。

表格同样采用这一逻辑。

---

## 数学公式

可以通过可视化方式插入数学公式：

```math
P(D)=(1-p)\left[q_N+(q_L-q_N)\pi_L\right]
```

无需为了一个公式手动处理完整的 LaTeX equation environment。

---

## 中英文写作

AcaTex 支持：

- 英文学术文档
- 简体中文
- 中英文混排
- Unicode
- 数学公式
- 中英文字体
- 自定义字体导入

---

## 本地优先

AcaTex 的核心写作流程可以在本地完成：

- 写作
- 保存
- 自动保存
- LaTeX 编译
- Citation
- 参考文献
- PDF
- 图片
- 表格
- 文档结构

你的论文不应该因为没有网络而无法继续写。

---

## 下载

当前版本：

**AcaTex v0.2**

支持：

**macOS · Apple Silicon**

请前往本仓库的 **Releases** 下载最新 `.dmg`。

---

## 当前状态

AcaTex 仍然处于 **Public Preview**。

复杂的 LaTeX 宏包、自定义命令、特殊 `.cls/.sty` 文件以及部分边缘场景仍可能存在兼容性问题。

如果遇到 Bug，欢迎提交 Issue。

---

## 关于源代码

本仓库目前用于：

- AcaTex 版本发布
- 文档
- Issue 追踪
- 功能建议
- 用户反馈

AcaTex 桌面应用核心代码目前暂未公开。

---

## AcaTex 的想法

LaTeX 的一个重要思想是：

> **作者应该描述文档的结构，而不是手工调整每一页的排版。**

AcaTex 想再往前一步：

> **如果作者连描述这些结构的代码都不需要写呢？**

这就是 AcaTex 正在尝试的事情。

**可视化写作，使用 LaTeX 排版。**
