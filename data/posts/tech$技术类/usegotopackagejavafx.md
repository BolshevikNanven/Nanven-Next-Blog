---
title: '使用go打包javafx为可执行程序'
description: '使用golang的embed功能将jlink打包产物嵌入到二进制文件中'
image: 'https://drive.nanven.cn/api?path=/blog-images/test1.png&raw=true'
date: '2024/12/29'
---

## 使用jlink打包
打包完成后会产生以下文件
```
app
├── bin
├── conf
├── legal
├── lib
└── release
```
其中bin文件夹中包含了java环境以及bat启动脚本   
通过这个bat文件可以启动我们的javafx程序

## 使用golang打包app文件夹

直接上代码
``` golang
import (
	"embed"
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"syscall"
)

//go:embed assets/*
var embeddedFiles embed.FS

func main() {
	tmpDir := filepath.Join(os.TempDir(), "tmp_dir")
	if err := os.MkdirAll(tmpDir, 0755); err != nil {
		fmt.Println("Error creating temp directory:", err)
		return
	}
	defer os.RemoveAll(tmpDir)

	err := embedFilesToTempDir(tmpDir)
	if err != nil {
		fmt.Println("Error extracting files:", err)
		return
	}

	if err != nil {
		fmt.Println("Error extracting disk:", err)
		return
	}

	batFile := filepath.Join(tmpDir, "assets", "bin", "app.bat")

	cmd := exec.Command(batFile)
	cmd.SysProcAttr = &syscall.SysProcAttr{HideWindow: true}
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err = cmd.Run()
	if err != nil {
		fmt.Println("Error running the JavaFX application:", err)
	}
}
func embedFilesToTempDir(tmpDir string) error {
	return fs.WalkDir(embeddedFiles, "assets", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			return nil
		}
		data, err := embeddedFiles.ReadFile(path)
		if err != nil {
			return err
		}

		destPath := filepath.Join(tmpDir, path)
		if err := os.MkdirAll(filepath.Dir(destPath), 0755); err != nil {
			return err
		}
		if err := os.WriteFile(destPath, data, 0644); err != nil {
			return err
		}
		return nil
	})
}
```

通过embed将app文件夹嵌入到可执行文件中，在运行时解压app至临时文件夹，并通过调用bat文件启动javafx程序