const { default: profileReducer, addPost } = require("./profile-reducer");

it("new post should be added", () => {
    const action = addPost("New post test")
    const state = {
        postsData: [{
            id: 1,
            text: "Hi, I am tired",
            likeCounts: 0
        }]
    }
    const newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(2);
})
