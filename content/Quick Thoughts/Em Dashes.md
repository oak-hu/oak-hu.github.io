---
title: "Em Dashes"
date: February 2025
---

Em-dashes are great—but sometimes they're difficult to type, especially with a Windows keyboard (in particular if you don't have a number pad). En-dashes, ≠, and ≈ are even worse.

Also, the CapsLock key occupies a really nice, central spot on the keyboard—and you don't actually use it that often. (Similarly with LeftShift for me personally).

Solution? Map CapsLock to an em dash; RightShift + CapsLock to an en dash; LeftShift to ≈; and RightShift+LeftShift to ≠.

There exist easy alt codes (option codes? idk) for some of these symbols on Mac—but you could also use [ahk-but-for-mac] to customize your Mac keyboard.

```
#Requires AutoHotkey v2.0

SetCapsLockState "AlwaysOff"

CapsLock:: {
    SendText("—")
}

+CapsLock:: {
    SendText("–")
}

LShift:: {
    SendText("≈")
}

+LShift:: {
    SendText("≠")
}
```
```
