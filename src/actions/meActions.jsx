export function fetchMe() {
  return {
    type: "FETCH_ME_FULFILLED",
    payload: {
      name: "Finbar Maginn",
      age: 26,
      id: "maginf01",
      email: "finbar.maginn@dixonscarphone.com"
    }
  }
}
