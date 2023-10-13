/// <reference types="svelte" />

import "@logseq/libs";
import App from "./App.svelte";

function createModel() {
  return {
    openSmartQuery() {
      logseq.showMainUI();
    },
  };
}

function main() {
  new App({
    target: document.querySelector("#app"),
  });

  const key = logseq.baseInfo.id;
  console.log("key: ", key);

  logseq.setMainUIInlineStyle({
    zIndex: 11
  });

  //where shortcuts are registered
  logseq.App.registerCommandPalette(
    {
      key: "logseq-plugin-smart-query:start-query",
      label: "Start Query",
      keybinding: {
        binding: "s q",
        mode: "non-editing",
      },
    },
    () => logseq.toggleMainUI()
  );

}

logseq.ready(createModel()).then(main).catch(console.error);
