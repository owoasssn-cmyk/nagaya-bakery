		// ページの読み込みが完了してから実行
		$(function() {
			// スクロール途中から表示したいメニューバーを指定
			var navBox = $("#headbar");

			// メニューバーは初期状態では消しておく
			navBox.hide();

			// 表示を開始するスクロール量を設定(px)
			var TargetPos = 300;

			// スクロールされた際に実行
			$(window).scroll( function() {
				// 現在のスクロール位置を取得
				var ScrollPos = $(window).scrollTop();
				// 現在のスクロール位置と、目的のスクロール位置を比較
				if( ScrollPos > TargetPos ) {
					// 表示(フェイドイン)
					navBox.fadeIn();
				}
				else {
					// 非表示(フェイドアウト)
					navBox.fadeOut();
				}
			});
		});