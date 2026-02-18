(function() {
      // ---------- 纯文字词库 ----------
      // 只放干净、有含义的短句/词语 —— 简单文字 Banner 的内容
      const messages = [
        "⚠️此项目因被 AI 替代，将不再更新文档"
      ];

      // 当前显示索引 (0‑based)
      let currentIndex = 0;
      const total = messages.length;

      // DOM 元素
      const bannerEl = document.getElementById('bannerText');
      const counterEl = document.getElementById('counter');

      // 辅助函数：更新视图 —— 只更新文字和计数器
      function updateBanner() {
        // 设置文字内容 (无任何额外标签)
        bannerEl.textContent = messages[currentIndex];
        // 更新计数器文字 (例如 "3 / 5")
        counterEl.textContent = `${currentIndex + 1} / ${total}`;
      }

      // 切换到下一条 (循环)
      function nextMessage() {
        currentIndex = (currentIndex + 1) % total;
        updateBanner();
      }

      // 切换到上一条 (循环)
      function prevMessage() {
        currentIndex = (currentIndex - 1 + total) % total;
        updateBanner();
      }

      // ---------- 初始化显示 (确保与索引一致) ----------
      updateBanner();

      // ---------- 事件绑定 (只有两个按钮，无多余) ----------
      document.getElementById('nextBtn').addEventListener('click', nextMessage);
      document.getElementById('prevBtn').addEventListener('click', prevMessage);

      // ---------- 微小细节：让 banner 可以通过键盘操作 (无多余功能，但更友好) ----------
      // 不加额外焦点管理，但保留按钮自然可聚焦 (已经是 <button>)
      // 为了极简，不加任何键盘监听，浏览器默认 Tab 切换就可访问按钮。
      // (完全符合“不要多余功能”，但按钮本身语义保留)
    })();
