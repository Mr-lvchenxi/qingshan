
export const loadFontFace = function (family: string, url: string) {
  return new Promise((resolve, reject) => {
    wx.loadFontFace({
      global: true,
      scopes: ['webview', 'native'],
      family, // 自定义字体的名称
      source: `url("${url}")`,
      success(res) {
        console.log("Font loaded successfully:", res);
        resolve(res);
      },
      fail(err) {
        console.error("Font load failed:", err);
        reject(err);
      },
      complete(res) {
        console.log("Font load attempt completed:", res);
      }
    });
  });
}