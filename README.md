# AcaTex

> **Write visually. Typeset with LaTeX.**

**AcaTex is a visual, structured academic writing environment powered by LaTeX.**

Write your paper like you would in a modern word processor. Add equations, citations, figures, tables, footnotes, and document structure visually.

AcaTex handles the LaTeX underneath.

No `\section{}`.  
No `\begin{figure}`.  
No fighting with BibTeX just to cite a paper.

**Just write.**

> **Public Preview · macOS · Apple Silicon**

---

## See AcaTex in Action

<p align="center">
  <img src="assets/acatex-demo.gif" width="100%" alt="AcaTex Demo">
</p>

<p align="center">
  <b>Visual writing on the left. LaTeX-quality PDF on the right.</b>
</p>

---

## Why AcaTex?

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

AcaTex lets you work with what those commands actually **mean**:

```text
Theory

Previous research suggests that...

Equation 1

Fearon (1995)
```

For example, instead of manually creating an equation environment, you can insert an equation visually:

$$
P(D)=(1-p)\left[q_N+(q_L-q_N)\pi_L\right]
$$

Underneath, AcaTex still generates and compiles LaTeX.

You get the typesetting system without having to make the typesetting language your writing interface.

---

# Built for Academic Writing

AcaTex treats a paper as more than a page full of formatted text.

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

AcaTex makes that structure visible and directly editable.

Move a section, and its numbering follows.

Move a paragraph, equation, figure, or table, and the document structure follows.

The idea is simple:

> **You decide what something is. AcaTex handles how it should be typeset.**

---

# Features

## Visual Academic Writing

Write in a familiar visual editor instead of editing LaTeX source.

AcaTex supports:

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

AcaTex's **Document Map** gives you a structural view of your paper:

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

$$
\Pr(D)
=
(1-p)
\left[
q_N+
(q_L-q_N)
\frac{\rho_N}
{1-\rho_L+\rho_N}
\right]
$$

AcaTex lets you work with mathematical content as part of the visual document.

You do not need to manually create:

```latex
\begin{equation}
...
\end{equation}
```

just to add a mathematical expression to your paper.

LaTeX remains responsible for the final mathematical typesetting.

---

## Citations without the BibTeX Headache

Academic citations should feel like part of writing — not a programming task.

AcaTex lets you:

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

AcaTex handles the citation key, BibTeX data, bibliography processing, and LaTeX commands underneath.

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

Add and manage:

- Local images
- Captions
- Labels
- Size settings
- Alignment
- References

### Tables

AcaTex supports different table workflows, including:

- Academic LaTeX-style tables
- Grid-style tables
- Captions
- Labels
- Row and column editing
- Alignment

AcaTex translates these visual objects into the corresponding LaTeX structure.

---

## Footnotes

Footnotes are part of the document structure rather than manually typed superscript numbers.

AcaTex manages footnote numbering and passes the final structure to LaTeX for typesetting.

This means the document can be reorganized without requiring footnote numbers to be manually rewritten.

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

AcaTex does not replace LaTeX with a simplified typesetting engine.

It uses LaTeX as the typesetting foundation.

The difference is the interface.

### Traditional workflow

```text
Writer
  ↓
LaTeX Commands
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

You are not locked into AcaTex.

---

## Chinese & English Academic Writing

AcaTex is designed for multilingual academic writing.

Current support includes:

- English academic documents
- Simplified Chinese academic documents
- Mixed Chinese-English writing
- Unicode text
- Mathematical content in multilingual documents
- Open-source Chinese and English fonts
- System fonts
- User-imported fonts

For example:

> International institutions may alter states' strategic incentives.

and:

> 国际制度可能改变国家在战略互动中的激励结构。

can exist in the same academic workflow.

Mathematical expressions remain available in multilingual documents:

$$
\pi_L=\frac{\rho_N}{1-\rho_L+\rho_N}
$$

---

## Fonts & Appearance

AcaTex includes a selection of academic-friendly English and Chinese fonts.

It also supports:

- Open-source fonts
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

Core AcaTex workflows run locally:

- Writing
- Saving
- LaTeX compilation
- Bibliography processing
- Reference management
- PDF generation
- Figures and tables
- Document structure management

Tectonic and the required writing infrastructure are integrated into the desktop application.

No browser-based writing environment is required for the core writing workflow.

---

# Templates

AcaTex supports academic document templates so that **content and typesetting can remain separate**.

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

The current AcaTex Public Preview supports:

- **macOS**
- **Apple Silicon**

Download the latest `.dmg` from the **Releases** section of this repository.

### Installation

1. Download the latest AcaTex `.dmg`
2. Open the disk image
3. Drag AcaTex into Applications
4. Launch AcaTex

Support for additional platforms is planned for future releases.

---

# What AcaTex Is — and Isn't

AcaTex is **not**:

- A replacement for every possible LaTeX workflow
- A visual parser for every LaTeX package ever created
- A browser-based collaborative editor
- A freeform desktop-publishing application
- An attempt to reproduce every feature of Microsoft Word

AcaTex **is** an attempt to make the most common academic writing workflow dramatically easier.

The focus is on:

- Writing
- Academic structure
- Equations
- Citations
- Footnotes
- Figures
- Tables
- References
- Templates
- Professional typesetting

Complex custom macros, unusual packages, and highly specialized document classes may not yet be fully editable through the visual interface.

You can still export your work to LaTeX.

---

# Public Preview

AcaTex is under active development.

This is an early public release.

Some features may change.

Some workflows may still contain bugs.

Some LaTeX documents may contain structures that AcaTex does not yet understand.

That's why this is a **Public Preview**.

If something breaks, please open an Issue.

Useful bug reports include:

- What you were trying to do
- What happened
- What you expected
- Your AcaTex version
- A screenshot or minimal example

Real-world academic documents are especially useful for improving compatibility.

---

# Roadmap

## v0.2 — Structure & Layout

Planned areas include:

### Advanced Visual Layouts

Support for more complex structured layouts, including layouts such as:

```text
┌───────────┬───────────┐
│    50%    │    50%    │
└───────────┴───────────┘
```

and:

```text
┌────────────────┬──────┐
│      70%       │ 30%  │
└────────────────┴──────┘
```

without turning AcaTex into a freeform desktop-publishing tool.

### Improved Template Compatibility

Better support for custom LaTeX templates, document classes, and style files.

### Better Document Navigation

Improved synchronization between Document Map and the visual editor, including more precise navigation to sections and academic objects.

### Cross-References

Visual references to:

- Sections
- Equations
- Figures
- Tables

without requiring users to manually manage `\label{}` and `\ref{}`.

### Continued Improvements

- More complex academic document structures
- Stability
- Performance
- Import/export compatibility

---

## Future

Possible future directions include:

- Broader platform support
- Academic metadata search
- More advanced template adaptation
- Expanded visual layout tools
- Deeper editor ↔ PDF synchronization
- Improved reference workflows

The roadmap is intentionally flexible.

AcaTex will evolve based on real-world use and user feedback rather than feature count alone.

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

而 LaTeX 代码生成、Tectonic 编译、参考文献处理以及 PDF 排版由 AcaTex 在后台完成。

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

> **你负责论文写什么，AcaTex 负责它怎么排。**

---

## 为什么做 AcaTex？

LaTeX 的问题并不是排版能力不够。

恰恰相反，它的排版能力非常强。

问题在于，很多用户只是想写一篇论文，却需要同时理解命令、环境、宏包、BibTeX、编译流程以及各种排版规则。

AcaTex 希望保留 LaTeX 的优势，同时改变它的交互方式。

### 传统 LaTeX

```text
作者
 ↓
LaTeX 代码
 ↓
TeX
 ↓
PDF
```

### AcaTex

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

AcaTex 不仅把论文看作一串文字，而是一个具有结构的学术文档。

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

## 数学公式

通过可视化方式插入和编辑数学公式，同时使用 LaTeX 完成最终数学排版。

例如：

$$
P(D)=(1-p)\left[q_N+(q_L-q_N)\pi_L\right]
$$

无需为了插入一个公式而把整篇论文变成代码编辑体验。

---

## Citation 与参考文献

AcaTex 希望把 Citation 重新变成写作的一部分。

你可以：

- 粘贴 BibTeX
- 导入 `.bib`
- 手动添加参考文献
- 本地管理文献
- 可视化插入 Citation
- 编辑和删除 Citation
- 自动生成参考文献

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

底层 BibTeX、biblatex 与参考文献编译流程由 AcaTex 处理。

---

## 图片与表格

AcaTex 将图片和表格作为学术文档对象进行处理。

支持：

- Caption
- Label
- 图片大小与对齐
- Academic Table
- Grid Table
- 行列编辑
- 文档结构导航

这些内容最终由 AcaTex 转换为对应的 LaTeX 结构。

---

## 实时 PDF 预览

可视化编辑器用于写作，PDF 用于展示最终排版。

```text
可视化编辑
    ↓
结构化文档
    ↓
LaTeX
    ↓
Tectonic
    ↓
PDF
```

二者是同一份学术文档的两种视图：

> **一个服务于写作，一个服务于排版。**

---

## 中英文写作

AcaTex 支持：

- 英文学术文档
- 简体中文学术文档
- 中英文混排
- Unicode 文本
- 数学公式
- 中英文字体
- 系统字体
- 自定义字体导入

例如：

> International institutions may alter states' strategic incentives.

以及：

> 国际制度可能
