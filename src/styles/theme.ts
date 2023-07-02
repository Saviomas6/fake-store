interface Theme {
  bodyColor: string;
  brandColor: string;
  text: string;
  statusBar: string;
  categoryColor: string;
  paragraphText: string;
  cardBackground: string; //changed it for now
  inputField: string;
  cardBg: string;
  liveBg: string;
  cashbackBg: string;
  selectTimeBg: string;
  filterDropDownBg: string;
}

export const darkTheme: Theme = {
  bodyColor: "#000000",
  brandColor: "#3AB712",
  text: "#FFFFFF",
  statusBar: "#F6D754",
  categoryColor: "#242424",
  paragraphText: "#ffffff",
  cardBackground: "#242424",
  inputField: "#F6F6F6",
  cardBg: "#F6F6F6",
  liveBg: "#BD00FF",
  cashbackBg: "#F6D754",
  selectTimeBg: "#242424",
  filterDropDownBg: "#242424",
};

export const lightTheme: Theme = {
  bodyColor: "#ffffff",
  brandColor: "#3AB712",
  text: "#000000",
  statusBar: "#F6D754",
  categoryColor: "#ECECEC",
  paragraphText: "#808080",
  cardBackground: "#f6f6f6",
  inputField: "#F6F6F6",
  cardBg: "#F6F6F6",
  liveBg: "#BD00FF",
  cashbackBg: "#F6D754",
  selectTimeBg: "#ECECEC",
  filterDropDownBg: "#F6F6F6",
};
