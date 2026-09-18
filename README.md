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
  <strong>Public Preview · v0.4 · macOS · Apple Silicon</strong>
</p>

<p align="center">
  Supports English and Chinese academic writing.
</p>

<p align="center">
  <a href="#中文介绍">中文介绍</a>
</p>

<p align="center">
  <a href="https://github.com/DarcyLuai/AcaTeX/releases/latest">
    <img src="https://img.shields.io/badge/Download-Latest%20Release-blue?style=for-the-badge" alt="Download Latest Release">
  </a>
</p>

---

## 👀 What is AcaTex?

AcaTex is a **visual, structured academic writing environment powered by LaTeX**.

Instead of treating your paper as plain text — or asking you to write LaTeX commands directly — AcaTex lets you work with the actual structure of an academic document.

Write your paper like you would in a modern word processor, while AcaTex understands and manages:

- Sections and document structure
- Equations and equation numbering
- Citations and bibliographies
- Cross-references
- Footnotes
- Figures
- Tables
- Structured layouts
- References and labels

AcaTex handles the corresponding **LaTeX structure, compilation, bibliography processing, cross-referencing, and PDF generation** in the background.

With v0.4, AcaTex can also work with **Zotero libraries and Word documents**, making it easier to move between existing academic workflows and LaTeX-quality typesetting.

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

But writing LaTeX source code is not always the most natural way to write a paper.

A typical academic document might contain:

```latex
\section{Theory}

Previous research suggests that...

\begin{equation}
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
\end{equation}

As argued by \textcite{fearon1995}...
```

AcaTex lets you work directly with what those commands **mean**:

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

can be inserted and edited visually, while LaTeX still handles the final mathematical typesetting.

The same principle applies throughout the document:

- A figure is not just a block of LaTeX code — it is a **figure**.
- A citation is not just a `\cite{}` command — it is a **reference to a source**.
- An equation is not just an environment — it is an **equation that can be numbered and cross-referenced**.
- A section is not just `\section{}` — it is part of the **structure of your paper**.

Because AcaTex understands these relationships, moving or reorganizing content can automatically update numbering, references, and document structure.

> **You decide what the document means. AcaTex handles how that structure becomes LaTeX.**

---

AcaTex is not intended to replace LaTeX.

It is designed to provide a more visual and structured way to **work with LaTeX** — while preserving the typesetting quality, portability, and flexibility that make LaTeX valuable for academic writing.

# AcaTex v0.4

AcaTex v0.4 is a major update focused on structured academic writing, citations, cross-references, document interoperability, and complex LaTeX workflows.

## ✨What’s New 

### Structured Document Model

The document architecture has been substantially redesigned.

Instead of treating a document as a collection of text blocks, AcaTex can now understand relationships between sections, equations, figures, tables, citations, and references.

This provides the foundation for more reliable cross-referencing, document checking, importing, exporting, and future academic-writing tools.

### Smart Table Import & Fit

AcaTex can import complex tables such as Table 1 from Word documents, recognize their structure, and automatically adjust font sizes and column widths.

The layout engine attempts to fit the table cleanly onto a portrait A4 page whenever possible, while preserving readability.

### TIFF / TIF Figure Support

Scientific figures in TIFF and TIF formats can now be imported directly into AcaTex.

### Word Import & Export

AcaTex now supports Word document import and export, allowing documents to move between Word and AcaTex more easily.

This makes it possible to use LaTeX-quality typesetting and structured academic writing without requiring every collaborator to work directly with LaTeX.

### Cross-References

AcaTex now supports cross-references for figures, tables, equations, and sections.

When content is moved, inserted, or reorganized, numbering and references are automatically updated.

### Improved Equation Editing

Equation editing has been redesigned with:

- Inline equations by default
-  Easy switching between inline and display equations
- Optional equation numbering
- Improved automatic layout for long equations

### Better Citation Management

Citation workflows now support:

- Multiple references in a single citation
- Centralized management of the same reference across the document
- Improved support for different citation styles

### 🔍 Zotero Integration

AcaTex v0.4 can search your local Zotero library directly, while retaining online literature search.

References can be inserted without manually copying and managing BibTeX entries.

### ✓ Document Check

The new Document Check helps identify common problems before submission, including:

- Broken or unresolved references
- Duplicate bibliography entries
- Missing titles
- Citation usage across different sections of the document

## Compatibility Components

Optional typesetting components can be managed from:

**Settings → Typesetting Components**

Users can:

- View available components

- Install components

- Check for updates

- Verify installed components

- Use installed components offline

AcaTex does not install a complete multi-gigabyte TeX distribution by default.

The goal is to provide the common academic writing environment out of the box while downloading uncommon compatibility resources only when they are actually needed.

## Fixes and Improvements

This release also includes:

- Fixed Compatibility Pack downloads from GitHub Releases

- Improved package registry and cache handling

- Improved GitHub Release asset handling

- Improved template dependency detection

- Improved XeTeX conditional dependency analysis

- Improved legacy graphics compatibility

- Improved Figure caption placement

- Improved compiler warning presentation

- Improved Citation appearance in Document Map

- Improved template import diagnostics

- Various UI, stability, and typesetting fixes

## Download

AcaTex v0.4.0 currently supports:

**macOS · Apple Silicon**

Download the `.dmg` attached to this release.

1. Open the downloaded `.dmg`

2. Drag AcaTex into `Applications`

3. Launch AcaTex

The macOS build is signed and notarized for external distribution.

AcaTex remains in Public Preview. Bug reports, unusual LaTeX templates, and feature suggestions are welcome.

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

## 👀 什么是 AcaTex？

AcaTex 是一个**由 LaTeX 驱动的可视化、结构化学术写作环境**。

它不会要求你直接面对 LaTeX 源代码，也不只是把论文当作一段段普通文字。AcaTex 让你直接操作学术文档真正的结构和内容。

你可以像使用现代文字处理软件一样写论文，同时由 AcaTex 理解和管理：

- 章节与文档结构
- 公式与公式编号
- 文献引用与参考文献
- 交叉引用
- 脚注
- 图片
- 表格
- 结构化排版
- 标签与引用关系

AcaTex 会在后台处理对应的 **LaTeX 文档结构、编译、参考文献处理、交叉引用以及 PDF 生成**。

从 v0.4 开始，AcaTex 还支持 **Zotero 文献库和 Word 文档工作流**，让现有的学术写作流程能够更方便地与 LaTeX 排版结合。

你不需要从这些代码开始：

```latex
\section{}
\begin{equation}
\begin{figure}
\cite{}
\label{}
\ref{}
```

**直接写就好。**

---

## 为什么是 AcaTex？

LaTeX 非常擅长排版。

但直接编写 LaTeX 源代码，并不一定是最自然的写作方式。

一篇普通的学术论文可能包含：

```latex
\section{Theory}

Previous research suggests that...

\begin{equation}
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
\end{equation}

As argued by \textcite{fearon1995}...
```

而在 AcaTex 中，你可以直接操作这些代码真正**代表的内容**：

```text
Theory

Previous research suggests that...

Equation 1

Fearon (1995)
```

例如：

```math
P(D)=(1-p)\left[q_N+(q_L-q_N)\pi_L\right]
```

可以直接以可视化方式插入和编辑，而最终的数学排版仍然由 LaTeX 完成。

同样的逻辑贯穿整个文档：

- 图片不只是一段 LaTeX 代码——它是一张**图片**。
- 文献引用不只是一个 `\cite{}` 命令——它是对一篇**文献的引用**。
- 公式不只是一个 environment——它是一个**可以编号和交叉引用的公式**。
- 章节不只是 `\section{}`——它是**论文整体结构的一部分**。

因为 AcaTex 能够理解这些内容之间的关系，当你移动、插入或重新组织内容时，相关的编号、引用和文档结构也可以自动更新。

> **你决定文档表达什么，AcaTex 负责将这些结构转换为 LaTeX。**

---

AcaTex 并不是为了取代 LaTeX。

它希望提供一种更加可视化、结构化的方式来**使用 LaTeX**，同时保留 LaTeX 在学术写作中重要的排版质量、可移植性与灵活性。

---
> ### 🎨 图标更新

>

> AcaTex 更新了应用图标，以形成更加独立的视觉风格，并避免与 Typora 的图标产生相似。

>

> 感谢大家此前的提醒和反馈！

---

## ✨ 本次更新

### 1. 🔗 交叉引用

新增 **图片、表格、公式和章节的交叉引用**。

调整、插入或移动内容后，编号与引用关系会自动更新，不再需要手动修改。

---

### 2. ∑ 公式编辑优化

重新优化公式编辑体验：

- 默认支持 **行内公式**

- 可自由切换 **行内公式 / 独立公式**

- 支持 **公式编号**

- 优化长公式的自动排版

---

### 3. 📚 文献引用优化

进一步完善文献引用工作流：

- 支持一次引用 **多篇文献**

- 统一管理同一篇文献在全文中的使用

- 改善不同引用格式的兼容性

---

### 4. 🔍 Zotero 本地文献库

v0.4 支持直接搜索 **本地 Zotero 文献库**，同时继续保留在线文献搜索。

找到文献后可以直接用于引用，不再需要手动查找和复制 BibTeX。

---

### 5. ✓ Document Check

新增 **Document Check**，用于快速检查文档中的常见问题，包括：

- 失效或未解析的交叉引用

- 重复文献

- 缺少标题

- 文献在不同章节中的引用与使用情况

方便在投稿、提交论文或导出最终版本前快速检查整个文档。

---

### 6. 🧩 重构文档结构

v0.4 对 AcaTex 的文档结构进行了较大重构。

AcaTex 不再只是将内容视为普通文字，而是能够识别 **章节、公式、图片、表格、文献及其相互关系**。

新的结构化文档模型也为以下功能提供了基础：

- Cross-reference

- Document Check

- 文档导入与转换

- 自动编号与引用更新

- 后续更多结构化学术写作功能

---

### 7. 🖼️ TIFF / TIF 图片支持

图片导入新增 **TIFF / TIF** 格式支持。

科研绘图、统计软件以及其他学术工作流生成的 TIFF 图片现在可以直接插入 AcaTex。

---

### 8. 📊 智能表格导入与排版

新增 **Smart Table Import & Fit**。

支持导入 Word 中的复杂表格，例如论文中常见的 **Table 1**。

AcaTex 会自动：

- 识别表格结构

- 调整字号

- 调整列宽

- 根据页面空间重新排版

并尽量将表格 **完整、美观地排入纵向 A4 页面**。

---

### 9. ⚙️ 进一步完善兼容性

继续改善以下工作流之间的兼容性：

- Zotero

- 不同文献引用格式

- 复杂 LaTeX 模板

- 现有学术写作工作流

---

### 10. 📄 Word 导入 / 导出

新增 **Word 文档导入与导出**。

现在可以在 **Word 与 AcaTex 之间转换文档**，让不熟悉 LaTeX 的用户也能使用结构化学术写作和 LaTeX 排版。

同时，也可以更方便地与仍然使用 Word 的 **导师、合作者和期刊工作流**衔接。

---

<p align="center">

  <strong>Write visually. Typeset with LaTeX.</strong>

</p>

AcaTex v0.4 继续朝着一个简单的目标前进：

> **让用户不需要手动处理复杂的 LaTeX，也能完成结构化、规范且适合学术出版的文档写作。**

## 下载

AcaTex v0.3.0 当前支持：

**macOS · Apple Silicon**

请下载本 Release 中的 `.dmg`。

1. 打开下载的 `.dmg`

2. 将 AcaTex 拖入 `Applications`

3. 启动 AcaTex

macOS 版本已经完成签名与 Apple Notarization。

AcaTex 目前仍处于 Public Preview 阶段。

如果你遇到 Bug、特殊 LaTeX 模板兼容问题，或者有新的功能建议，欢迎通过 GitHub Issues 反馈。


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

**AcaTex v0.4**

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
