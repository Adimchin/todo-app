import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

type SettingsPageProp = {
  darkMode: string;
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
};

function SettingsPage({ darkMode, setDarkMode }: SettingsPageProp) {
  const changeAppMode = () => {
    if (darkMode === "false") {
      setDarkMode("true");
      localStorage.setItem("appMode", "true");
    } else {
      setDarkMode("false");
      localStorage.setItem("appMode", "false");
    }
  };

  return (
    <>
      <title>todo-app | Settings</title>

      <Header darkMode={darkMode} />

      <SideBar darkMode={darkMode} />

      <div
        className={`px-7 pt-8 sm:pl-60 h-screen ${darkMode === "true" ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="flex items-center">
          <div
            className={`grow font-semibold ${darkMode === "true" ? "text-white" : "text-slate-800"}`}
          >
            Dark Mode
          </div>
          <div>
            <div
              className={`w-11 h-6 rounded-full cursor-pointer ${darkMode === "true" ? "bg-white" : "bg-slate-900"}`}
              onClick={changeAppMode}
            >
              <span
                className={`inline-block w-6 h-6 rounded-full border transition-all duration-500 translate-x-0 ${darkMode === "true" ? "translate-x-6 bg-slate-900 border-white" : "translate-x-0 bg-white border-black"}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
