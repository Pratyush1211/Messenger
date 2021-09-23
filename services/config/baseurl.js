import Constants from "expo-constants";

const { manifest } = Constants;

const BASEURL = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

// const BASEURL = "http://192.168.56.1:3000"
export default BASEURL