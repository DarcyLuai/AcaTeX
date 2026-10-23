<p align="center">
  <img src="assets/acatex-icon.png" width="128" alt="AcaTeX Logo">
</p>

<h1 align="center">AcaTeX</h1>

<p align="center"><strong>Write visually. Typeset with LaTeX.</strong></p>

<p align="center">A visual, structured academic writing environment powered by LaTeX.</p>

<p align="center"><strong>Public Preview · v0.5.5 · macOS (Apple Silicon) & Windows (x64)</strong></p>

<p align="center">Supports English and Chinese academic writing.</p>

<p align="center">
  <a href="#中文介绍">中文介绍</a> ·
  <a href="https://acatex.cn/help">Documentation / 使用说明</a>
</p>

<p align="center">
  <a href="https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.5OS">
    <img src="https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-blue?style=for-the-badge&logo=apple" alt="Download AcaTeX for macOS">
  </a>
  <a href="https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.5win">
    <img src="https://img.shields.io/badge/Download-Windows%20(x64)-blue?style=for-the-badge&logo=windows" alt="Download AcaTeX for Windows">
  </a>
</p>

<p align="center"><a href="https://github.com/DarcyLuai/AcaTeX/releases">All releases</a> · <a href="https://github.com/DarcyLuai/AcaTeX/issues">Report an issue</a></p>

---

## 👀 What is AcaTeX?

AcaTeX is a **visual, structured academic writing environment powered by LaTeX**. Write in a familiar editor while working with the actual elements of an academic document: sections, equations, citations, cross-references, figures, tables, footnotes, and labels.

AcaTeX handles LaTeX structure, compilation, bibliography processing, cross-referencing, and PDF generation behind the scenes. You can work visually without starting from commands such as:

```latex
\section{}
\begin{equation}
\begin{figure}
\cite{}
\label{}
\ref{}
```

**Just write.**

## Why AcaTeX?

LaTeX is excellent at typesetting, but writing its source code is not always the most natural way to write a paper. For example, a document might contain:

```latex
\section{Theory}

Previous research suggests that...

\begin{equation}
P(D)=(1-p)[q_N+(q_L-q_N)\pi_L]
\end{equation}

As argued by \textcite{fearon1995}...
```

In AcaTeX, you work with the **section**, **equation**, and **citation** as document objects, while LaTeX handles their final typesetting.

- A figure is a **figure**, not merely a code block.
- A citation is a **reference to a source**, not just a `\cite{}` string.
- An equation can be **numbered and cross-referenced**.
- A section belongs to the **structure of your paper**.

> **You decide what the document means. AcaTeX handles how that structure becomes LaTeX.**

AcaTeX is not intended to replace LaTeX. It offers a more visual way to work with it while preserving LaTeX's portability and typesetting capabilities.

---

## ✨ AcaTeX v0.5.0 — Highlights

### 🪟 Now on Windows

AcaTeX v0.5.0 is available for **macOS (Apple Silicon)** and **Windows (x64)**. Each platform has its own GitHub Release, so installation packages and platform-specific notes are easy to find.

### 🤖 AI-compatible document editing

The **AcaTeX AI Protocol** enables a model-independent, review-first workflow with compatible AI tools such as ChatGPT, Claude, and DeepSeek:

1. **Prepare AI Copy** in AcaTeX.
2. Give the exported request package to your preferred AI.
3. **Import AI Changes** as a structured patch.
4. Review proposed changes and save a **new copy**.

The workflow uses stable document identities and validation to protect unrelated content. AcaTeX does not require an AI API key, does not automatically upload your manuscript, and does not silently overwrite the original document.

### 📄 Writing ↔ PDF

Integrated LaTeX compilation and PDF preview bring your writing and final output together. Supported writing–PDF navigation helps you move between the editor and the rendered document.

### 📚 Research Marks

Organize key parts of your argument using structured research marks:

- **RQ** — Research Question
- **Claim** — Central argument
- **Hypothesis** — Theoretical prediction
- **Finding** — Research finding

### 🧩 Structured documents and cross-references

AcaTeX's native `.texflow` format preserves visual document structure and AcaTeX-specific metadata. Manage sections through the structure panel, and use cross-references for sections, equations, figures, and tables.

### ∑ Mathematics, citations, figures, and tables

- Inline and display equations, including common mathematical environments
- Citation and bibliography workflows, including multiple sources in a citation
- Zotero local-library search and supported literature-search workflows
- Figure insertion, captions, and TIFF/TIF support
- Visual tables and Smart Table Import & Fit
- Word import/export and LaTeX import/export workflows
- Document Check for common document and reference issues

### ⚡ Editing performance

Version 0.5.0 includes improvements for complex documents with many citations and equations. Internal input-latency benchmarks (median / P95, milliseconds):

| Scenario | Before | v0.5.0 |
|---|---:|---:|
| 20 paragraphs, PDF off | 16.6 / 18.3 | 16.6 / 18.2 |
| 240 citations + 240 equations, PDF off | 66.1 / 149.1 | 24.3 / 65.0 |
| 240 citations + 240 equations, PDF on | 75.8 / 163.8 | 24.0 / 81.0 |

*Internal test results; actual performance depends on hardware and document complexity.*

### ⚙️ Typesetting compatibility

Optional typesetting components can be managed from **Settings → Typesetting Components**, including installation, updates, and verification. AcaTeX aims to avoid requiring a complete multi-gigabyte TeX distribution for common writing tasks.

---

## 📥 Download & Install

| Platform | Release | Package |
|---|---|---|
| **macOS — Apple Silicon** | [v0.5.0 macOS](https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.0mac) | Download the `.dmg` asset |
| **Windows — x64** | [v0.5.0 Windows](https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.0win) | Download the Windows installer asset |

**macOS:** Open the `.dmg`, drag AcaTeX into **Applications**, then launch it.

**Windows:** Download the installer from the Windows Release, run it, and launch AcaTeX.

See the [full documentation](https://acatex.cn/help) for setup instructions and troubleshooting. AcaTeX remains a **Public Preview**; complex templates, custom macros, and unusual `.cls`/`.sty` dependencies may still require compatibility fixes.

## 🏠 Local-first

Core writing, saving, compilation, citations, figures, tables, and PDF workflows are designed to run locally. Optional online services and manually exported AI requests are separate from that core workflow.

## 🐛 Feedback

Found a bug, an unusual `.tex` file, or a missing academic workflow? [Open an Issue](https://github.com/DarcyLuai/AcaTeX/issues). Please include your operating system, AcaTeX version, steps to reproduce, and relevant error messages.

## Source Code

This repository currently hosts releases, documentation, issue tracking, feature requests, and community feedback. The AcaTeX desktop application's core source code is currently **proprietary and is not included in this repository**.

## The Idea Behind AcaTeX

LaTeX solved an important problem:

> **Authors should describe the structure of a document instead of manually typesetting every page.**

AcaTeX asks one more question:

> **What if authors didn't have to describe that structure in code?**

**Write visually. Typeset with LaTeX.**

---

# 中文介绍

## 👀 什么是 AcaTeX？

AcaTeX 是一款**由 LaTeX 驱动的可视化、结构化学术写作环境**，支持中文与英文写作。

你可以像使用现代文字处理软件一样撰写论文，同时由 AcaTeX 管理章节、公式、文献引用、交叉引用、脚注、图片、表格及 PDF 编译。你无需从 `\section{}`、`\begin{equation}` 或 `\cite{}` 等命令开始。

**直接写就好。**

## 为什么是 AcaTeX？

LaTeX 擅长排版，但直接编辑 LaTeX 源代码未必是最自然的写作方式。AcaTeX 让你直接操作文档对象：

- 图片是一张可以设置标题和标签的**图片**。
- 引用是与文献条目关联的**引用**。
- 公式是可以编号、编辑和交叉引用的**公式**。
- 章节是论文整体结构中的**章节**。

> **你决定文档表达什么，AcaTeX 负责将这些结构转换为 LaTeX。**

AcaTeX 并不试图取代 LaTeX，而是提供一种更加直观的使用方式，同时保留其专业排版与可移植性。

---

## ✨ v0.5.0 主要更新

### 🪟 Windows 与 macOS 双平台

AcaTeX v0.5.0 现提供 **macOS（Apple Silicon）** 与 **Windows（x64）** 版本。两个平台分别发布独立的 GitHub Release，可根据系统选择对应安装包。

### 🤖 AcaTeX AI Protocol

AcaTeX 提供模型无关的 AI 文档修改工作流，可配合 ChatGPT、Claude、DeepSeek 等兼容模型使用：

1. 在 AcaTeX 中选择 **准备 AI 副本**。
2. 将生成的请求包交给你使用的 AI。
3. 将 AI 返回的结构化补丁通过 **导入 AI 修改** 带回 AcaTeX。
4. 检查修改内容，确认后**另存为新副本**。

该流程使用稳定对象 ID 和校验机制保护文档。AcaTeX 不要求配置 AI API Key，不自动上传论文，也不会静默覆盖原稿。

### 📄 写作与 PDF 联动

集成 LaTeX 编译、PDF 预览及受支持内容的写作—PDF 导航，让编辑与查看排版结果更加方便。

### 📚 学术研究标记

支持四类 Research Marks：

- **RQ**：研究问题
- **Claim**：核心论点
- **Hypothesis**：研究假设
- **Finding**：研究发现

### 🧩 结构化文档与交叉引用

原生 `.texflow` 格式保留可视化结构及 AcaTeX 专用元数据。通过结构侧栏管理章节，并为公式、图片、表格和章节建立交叉引用。

### ∑ 公式、文献、图片与表格

- 行内公式、独立公式与常见数学环境
- 多文献引用与参考文献管理
- 本地 Zotero 文献库搜索及相关检索工作流
- 图片、标题、标签与 TIFF/TIF 格式支持
- 可视化表格与 Smart Table Import & Fit
- Word 与 LaTeX 导入、导出工作流
- Document Check 文档检查

### ⚡ 性能优化

v0.5.0 优化了包含大量公式和引用的复杂文档输入性能。内部测试中，240 个引用与 240 个公式的文档：

- **关闭 PDF 预览**：输入延迟中位数从 66.1 ms 降至 24.3 ms。
- **开启 PDF 预览**：输入延迟中位数从 75.8 ms 降至 24.0 ms。

以上为内部测试数据，实际表现因设备和文档而异。

### ⚙️ 排版兼容组件

可通过 **设置 → 排版组件** 查看、安装、更新和验证可选排版组件，以支持更多复杂模板与依赖。

---

## 📥 下载与安装

| 平台 | 下载地址 | 安装方式 |
|---|---|---|
| **macOS · Apple Silicon** | [下载 v0.5.0 macOS 版](https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.0mac) | 下载 `.dmg`，拖入“应用程序” |
| **Windows · x64** | [下载 v0.5.0 Windows 版](https://github.com/DarcyLuai/AcaTeX/releases/tag/v0.5.0win) | 下载 Windows 安装程序并运行 |

完整操作说明：[acatex.cn/help](https://acatex.cn/help)

AcaTeX 目前仍处于 **Public Preview** 阶段。复杂 LaTeX 宏包、自定义命令、特殊 `.cls/.sty` 文件及部分边缘场景仍可能存在兼容性问题。

## 🏠 本地优先

AcaTeX 的核心写作、保存、编译、文献引用、图片、表格和 PDF 工作流以本地运行为主。在线检索等可选服务，以及由用户主动导出的 AI 请求，与核心离线写作流程相互独立。

## 🐛 问题反馈

如遇 Bug、特殊模板兼容问题或有功能建议，欢迎通过 [GitHub Issues](https://github.com/DarcyLuai/AcaTeX/issues) 反馈。建议提供系统版本、AcaTeX 版本、复现步骤及相关错误信息。

## 关于源代码

本仓库目前用于版本发布、文档、Issue 追踪、功能建议与用户反馈。AcaTeX 桌面应用的核心源代码目前**尚未公开**。

## AcaTeX 的想法

LaTeX 的一个重要思想是：

> **作者应该描述文档的结构，而不是手工调整每一页的排版。**

AcaTeX 想再往前一步：

> **如果作者连描述这些结构的代码都不需要写呢？**

<p align="center"><strong>Write visually. Typeset with LaTeX.</strong></p>
