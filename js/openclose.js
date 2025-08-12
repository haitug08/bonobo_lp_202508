document.addEventListener('DOMContentLoaded', () => {
  // スクロール時の固定ヘッダー・ページトップボタンの表示/非表示を制御
  const offsetTop = 350;
  const hysteresis = 50;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > offsetTop) {
      document.body.classList.add('is-fixed-pagetop', 'is-fixed-head');
    } else if (scrollTop < offsetTop - hysteresis) {
      document.body.classList.remove('is-fixed-pagetop', 'is-fixed-head');
    }
  });

  // モーダルの開閉を制御する共通の関数
  function setupModal(openBtnId, modalId) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    if (!openBtn || !modal) return;

    const closeBtn = modal.querySelector('.close-btn');

    openBtn.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'flex';
      modal.classList.add('open');
      document.body.classList.add('modal-open');
    });

    function closeModal() {
      modal.classList.remove('open');
      modal.classList.add('close-animation');
      
      modal.addEventListener('animationend', () => {
        modal.style.display = 'none';
        modal.classList.remove('close-animation');
        document.body.classList.remove('modal-open');
      }, { once: true });
    }

    closeBtn.addEventListener('click', e => {
      e.preventDefault();
      closeModal();
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // すべてのモーダルに同じ開閉ロジックを適用
  setupModal('openPlanModal', 'plan');
  setupModal('openService1Modal', 'service1');
  setupModal('openService2Modal', 'service2');
  setupModal('openService3Modal', 'service3');
  setupModal('openService4Modal', 'service4');
  setupModal('openService5Modal', 'service5');

  // jQuery依存のコードは、jQueryが読み込まれた後でないと動作しないため、このスクリプトからは除外
  // 元のopenclose.jsにあった以下のコードは、jQueryの読み込みが解決されたことで、
  // index.htmlの<body>タグ内のlightbox-plus-jquery.min.jsの後にあれば動作するはずです。
  // そのため、ここでは不要です。
  // var requestTop = $('.request').offset().top;
});

// 元のopenclose.jsにあった三本バーアイコンの開閉は、index.htmlでコメントアウトされているため除外
// CSSClassListやdo_onoff、open_closeなどの関数も不要と判断し除外
// openclose.js内に重複して記述されていたスクロールイベントリスナーも統合しました。
