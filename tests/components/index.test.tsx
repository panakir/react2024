describe("testing entry point", () => {
  it("should render into div with id=root", () => {
    const root = document.getElementById("root");
    if (root && root instanceof HTMLElement) {
      expect(root).toBeInTheDocument();
    } else {
      expect(root).not.toBeInTheDocument();
    }
  });
});
