export var LeavePage = {
  tab: {
    menu: '.oxd-main-menu-item--name'
  },
  input: {
    employname: "//input[@placeholder='Type for hints...']",
    fromdateandtodate: '[placeholder="yyyy-mm-dd"]'
  },
  div: {
    status: "//div[@class='oxd-select-text-input'][normalize-space()='Select']",
    leavetype: "(//div[contains(text(),'-- Select --')])[1]",
    subunit: "(//div[contains(text(),'-- Select --')])[2]",
    employnamefilter: "(//div[@role='cell'])[3]"
  },
  toggle: {
    includepastempl:
      "(//span[@class='oxd-switch-input oxd-switch-input--active --label-right'])[1]"
  },
  button: {
    searchbtn: "//button[normalize-space()='Search']",
    cancelorresetbtn: "//button[normalize-space()='Reset']"
  }
}
