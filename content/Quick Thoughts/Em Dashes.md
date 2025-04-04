---
title: "Em Dashes"
date: February 2025
---

Em-dashes are great—but sometimes they're difficult to type, especially with a Windows keyboard (in particular if you don't have a number pad). En-dashes are even harder, but they're also useful (for number ranges, say, or even using spaced en dashes in place of em dashes).

Also, the CapsLock key occupies a really nice, central spot on the keyboard—and you don't actually use it that often.

Solution? Map CapsLock to an en dash, and Shift + CapsLock to an em dash!

```
#Requires AutoHotkey v2.0

SetCapsLockState "AlwaysOff"

CapsLock:: {
    SendText("–")
}

+CapsLock:: {
    SendText("—")
}
```

There exist easy alt codes (option codes? idk) for some of these symbols on Mac—but you could also use [ahk-but-for-mac] to customize your Mac keyboard.
