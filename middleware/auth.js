export default function ({ store, redirect }) {
  if (!store.state.loggedin) {
    return redirect('/')
  }
}
