const root = document.body;
let count = 0;

function increment() {
  m.request({
    method: "PUT",
    url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
    body: {count: count + 1},
    withCredentials: true,
  })
  .then((data) => {
    count = parseInt(data.count);
  });
}

const Splash = {
  view: () => {
    return m("a", {href: "#!/hello"}, "Enter!");
  },
};

const Hello = {
  view: () => {
    return m("main", [
      m("h1", {class: "title"}, "An app"),
      m("button", {onclick: increment}, count + " clicks"),
    ]);
  },
};

m.mount(root, Hello);
m.route(root, "/splash", {
  "/splash": Splash,
  "/hello": Hello
});

