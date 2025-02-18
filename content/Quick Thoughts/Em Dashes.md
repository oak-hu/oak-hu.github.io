---
title: "Em Dashes"
date: February 2025
---

Em-dashes are great — but they're somewhat difficult to type. (I know that you're not meant to include spaces around em dashes, but at least right now I do prefer it aesthetically — sorry!)

Problem 1: They're difficult to type, especially with a Windows keyboard (in particular if you don't have a number pad).

Problem 2: The CapsLock key occupies a really nice, central spot on the keyboard — and you don't actually use it that often. (Similarly with LeftShift for me personally).

Solution? Map CapsLock to an em dash. Makes typing them even faster than on a Mac!

```
#Requires AutoHotkey v2.0

SetCapsLockState "AlwaysOff"

CapsLock:: {
    SendText("—")
}
```
