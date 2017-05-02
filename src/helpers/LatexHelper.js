class LatexHelper {
  static renderLatex(text) {
    const inlineResult = /^\$(.*)\$$/.exec(text);
    if (inlineResult !== null) {
      return { text: inlineResult[1], display: "inline" };
    } else {
      const blockResult = /^\\\[(.*)\\\]$/.exec(text);
      if (blockResult !== null) {
        return { text: blockResult[1], display: "block" };
      }
    }
  }
}

export default LatexHelper;
