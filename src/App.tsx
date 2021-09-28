import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Board from "./components/Board";
import {
  createRandomDate,
  createSection,
  createTask,
  createUser,
  Section,
  Task,
} from "./Mocks/items";
import { BoardPropTypes } from "./components/Board/Board";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.font};
  display: flex;
  flex-direction: column;
`;

const ThemeChanger = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 10px;
`;

const user1 = createUser({
  id: "1",
  name: "Franek",
  icon: "data:image/jpeg;base64,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",
});
const user2 = createUser({
  id: "2",
  name: "Frankoina",
  icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRISEhESFBQZGBIZGBUYGhgZGRgYGBgZGRoYGRkcITAlHB4rHxgWJjgoKy8xNzU1GiQ7QDszQC43NTQBDAwMEA8QHxISHjQsJSs0NTYxMTQ0ND00MTQxMTQ0NDQ0MTQ0NDQ0ND0xNDQ0NDQ3NDE0MTQxNDQ0NDQ0NDQ0NP/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABDEAACAQIBBwcJBgYBBQEAAAABAgADBBEFBhITITFBByJRYXGBoRVSVGJykZPB0RQyQoKSoiMzU7Gy8ENjc8LS4ST/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAJxEAAgIBBAIBBAMBAAAAAAAAAAECEQMEEiExQWFRMnGBkSIzQhP/2gAMAwEAAhEDEQA/AJmiIgCIiAIiIAiIgHkTwnDad04DOTO5mJpWrYLuaqN7dSdA9bf0YbzFlzRxK2bwg5ukdTlXOC2tsQ74t5i85vduHeROWvM/KhxFGiijpclj7hgB7zONJxxJ2k7z0mJysmtyS+nhFyOnjHvk39TO++bdVVepUX5gy0M6770g/oT/ANZpYld58j8v9kv/ADh8L9HRUs8r1d7U29pB/wCOE2dpn62wVaAI4sjYftbf75xUTdarKumzDw434JXybnLa3GAWposfwPzW7BwPcTN1IOm9yLnPcW+CkmrS8xjtA9Vt47N0uYtf4mvyivPTeYkqxNdknKtK6TTpNj0qdjKegibGdGMlJWiq006Z7ERNjAiIgCIiAIiIAiIgCIiAIiIAiIgHkRNNnNlb7LQZwRpnmoPWPHsAxPdNZyUYuT8GUm3SOaz3y+STa0mwA/msOJ8wdXT7umcXBYkkkkkkkk7yTvJnk8/myvJJtnTxwUI0j2IiRm4iIgCIiAIiIBk5Pvqlu61KTaLD3MOKsOIkqZCywl3TDrsYYBl4qfmDwMiKbDIuVGtaq1ExI3MvnLxHbxHXLWl1DxSp9MgzYlJWuyYolm1uFqItRDirAFT1GXp2075Rzz2IiZAiIgCIiAIiIAiIgCIiAIiIBTIvz7ylrbjVqebSGj2scCx/xH5TJIvrkUqdSqdyKzH8oJkJVKrOzOxxZizMekscT4mUNdOoqK8lnTQttnoMqBlAMqBnIaLxVE8BnsAREvWls1VlRBizHAfU9UA2ebeSte+k4/hpgW9Y8F+Z/wDs3mVM10fFqOFNvN/Ae78Pd7pu8nWS0EWmu4Daek8SZk4S5HCttMhc+eCLbq2ekxR1KsOB4jpB4iWJJmUsnpXQo47GG9T0gzgMp5Oe3bQfaPwtwYfXqlfJjcfsSRlZhRESM2O25P8AKuBa1c7Di9Pt3uo/y/VO8kKWdy1J0qJ95GDDrw4dhGI75MlrXWoiVFOKsFYdhGM7Giy7obX4KGohtla8mRERLxXEREAREQBERAEREAREQBERAOV5QbrQtSg31GVO4c4/44d8i4Gdrym3OL29LHcruR7RCj/FpxQBwJ4DDxx+k4+rluyP1wX9OqiVAyoGWwZWDKbROVgz0TxQSQBvmZlK0NFkQ79BSe08JrRkxZ3OauSdWutcc9xs9VfqfpNDmzkvXPpuOYh2+seAnfqJYwQvlkeSXgqAjCVAT0iXKILLTCYGVcnpXQo2/ercVPAzYsJbYTScbVG8WRZcUGR2RxgynAy1Oqzxsfu1lHqt8j/vVOVnPnHa6J07Qkk5gXmnbmmTtpsQPZbnL46Q7pG06nk/utC4anjsqIf1LtHhpyxo57cq98EWeO6D9ElRETunOEREAREQBERAEREAREQBERAIjz9uNK9qDzFpp+0P/dzNPQXFH/3dtl3OKtp3V03/AFag7lYqPBRKLfYoH+7ZwdQ7k37OphXCXo2WSs26tZQ7HQQ7id57BNo+aK4c2qcesbJ0GRm0raifUXw2TJmzgkYTOSyFkJ0rM1UbEww6GPAieZxWjVbmmiDayr3bTtnWy2lsumahHOwCg9Q2/Oa7VVG1leTrRaKLTUbAPeeJmcstrLqy1BEMisCe4T1ZURJ0uCKyywltpeaWWkUjeJrcr2+spVE9U4do2iRvJTqDYZGV2mi9RehmHjKOdcpk8CzNhkGvq7i3bodQexjoHwYzXwCRtG8bRIoyqSfwbNWqJynss21UOiONzKp94B+cuz0i6OSexETIEREAREQBERAEREA8nhnsw8r19XQrv5tOo3uUmYbpWEQfXqax3fznZv1MT85kq0waUvF9k4GRWzqwdEl5sNpWtPsYeMzpqszHxtlHQTNqRJn0jRdsSpZTKlmEZZeWXVlpZcWTxIpF9JU0tqZ6TJ0+CJrkpaWWl0y00ikSRLTyNcqj+NV9tv7ySXMjTKLY1ah9ZpSzk8TGiIkBuS7mzV0rW2PqKP0835TazncxXxtEHmtUH7ifnOhnosLvHF+jlTVSa9lUREkNRERAEREAREQBESh3CgkkADeTsA74BVOL5RssCnQ+zKf4lXDEebTBxJPaQF9/RK8v59W9AFKBFer6p5inpLDf2D3iRhe3tSu7VarFnY4knwAHADolTPmSi4rsmxY3dstgyrGUCegznNFyyQ8xHxosOhvrOhqb5yOYNXZUT/eBnX1Jt/keSierPIEwbF9ZcUyyplxTJYsjki8plRMtgz3GS2R0GMtMZUxlDGaSZtFGPctgrHoBkZ12xZj1n+8kLLVXQpOerCRzKeZ8onj0IiJCbEjcnjY27joqv4qh+c6ychyc/wAir/3T/gk6+d/Tf0x+xzMv1s9iIk5GIiIAiIgHk0mXaV/hpWdWkDxp1F3+y4OzsI7xN3Ew1aoymQ9lbObLFElazvR6tXTAPsvonS7jOdvMo16386tUqdTuzDuBOAktZ65faySkTbJXpuWVgzYAEAED7pBxGl7pwF1nDYvt8kUVPq1WQe5EWUsqp05fssQdq9pzgMvNTKjnDDHcDvI6cOAmTVyr/SoUKHQVUs/66hYg9a4TBLEkkkknaSdpJ6SZWaROisGVAy2DKwZo0ZOnzIr6NYr5wHzHzEkB5EWT7xqLrUXeP7STskZUS4QMpGOG0QvgyZkT0ieTBsVqZdUywplwGbxZo0XQZ7jKAZ7jN7NaBMoYz0mY9zcLTUs5wExJmyRpM7a+jTC9J/35zi5tcuZU17DAc0bpqSZRnK5EqXB7E8E9mpkkXk7XC3qHpqt4IgnWzncxqWjaIfOaof3FflOinoNOqxR+xzMrubPYiJMRiIiAIiIAiIgGjzryP9stqlEYaexkJ4Ou0dgO1exjINdGRmR1KspKsp2EEHAgjpxn0bOXzlzMt706wE0q2H8xRiGw3aa/i7cQeuQZsW7ldkuOe3hkMgyoGdjX5N71TzKluw4HSdT3gqcPfOey3karZutOsU0mUNgjFsASQMdg6DKcsco8tFiMovpmCDKgZbBlQMiaJC4DM7JeUXt3DKThxHT1jrmADKgZo0ZTJWyVlRLhQykY9H+8eqZpE4PMxNJqi4kbV2jgQrHHwE7JbkodGpsPB/wt9DFmxlSsGUCegwmCstgNxPUOPvmqfOO2Rijs6MN6sjgjwmyZwBiSAOkzWX1BLoaOrVlH/IwwI9g75lydcGqS8lmtnTbAc1yzcBosPEic9lnKorLs08ThiTgBx2AA7psbjNBd9Osy9TqG8QRNXlTIlSgmkzow6scd4HEdcik5NckiUTUYz0SkCViQMzYAgz2bDINlr69KnhipYFvZXnN7wMO+ZjFykoryYbpWyUsiW2qoUEO8ImPaRifEmbCIno4qkkcpu3Z7ERNjAiIgCIiAIiIAlqqWCkoAWwOAJwBPAE4HDtwMuxAI4vOUh6Zam1gUqKSGVqv3SOnBNvznBZVylUuarV6pBZsN2wKBsCqOAElzOvNOlfDTBFOuBgtTDYR5rjiOvePAxNlfI1xaPoV6bLt5r70f2XGw9m/pAlLMp/Nos43Hx2YQMqBlAM8eqqjFmVR0kgf3laicvAyoGa3yohOFNHqn1FOA7WMq/wD1MCQEpDA7+c3V6s3jp5y8EbyxXkkPMSiee/WfAAfMzsHUEYEAjoM5rk90WsaFQElnDaRPnKzK3iDOnkEo7W0TxdpMxfshX+W7J1feX3GNCt59MdYBx8ZlRMGTGWzXHFyzn1t3cJkASoCXxTwGJmYxbMOVGPNHnWuNEnt+R+U3hkfcoGWK+vS0t3RQKReppAFSWYBVJ3ggKTs8+Zhjlke2JiU1FWzWAyoGaRcp10/m25YedSOl+07Zk0MtW7nDT0W81wVI9+zxkc9Nlj3ERywl0zaCd/yf5MKq9yw2vzU9gHae8j9vXOVzZyM15UH9EYF2G7DzVPnHw3yWaVNUUKoAUAAAbgBsAEsaLTty3y8dEOoycbUXYiJ1SmIiIAiIgCIiAIiIAichnlnvb5OwpgGtcsMVoKcCBwaofwL4no4iKcqZzZRuyTXu3pof+G3OrUDzdIc5h2kwCbcr5y2NmD9puqNMgY6BYFyOqmuLHuE4jLPKjbOrU7axqXanZjVC06RH5gS3ZgJGNG2pocVQY+cdp952zI04BTd62s7P/Dt1JP8ACohiB2M5JHds6AJTSybRU4lS7ec5LHx2eEuacacwkl0jLk32ZKsBsGAHQJ7rJi6cacyYO85LK+NtXo/0rioAPVbBh4lp20jTkxudG6vKWP36dKoB7B0WP7hJLnK1EayMv4XcEIiJCSldIgHGe1aml2S3EzudUYpXYkLXN79oubu5xxD1CqHHEGnT5qkdoGMlDO/KX2ayuqwODBCqHjpvzFI7CwPdIgtF0EROgDHt4+OMu6SPcvwVtRLqJsNZKKqI4wdVYdYB/vLGnGnLpVK7VHoHStq9e3bHE6qoygn1lxwM6PJ+f2VqGAd6F2vEVE1b4dAZMBj1kGczpxpwCTMn8rNucBd2txbniygVaY/MuB/bOvyRnTYXeAt7ui7EYhNIK+HsNg3hIE05j17am/3kUnpwwPvG2AfTsT56yJnPf2DA0K71qQ329Zi6kdCMdqHow2Y78ZMuaedFvlKlrKJKuuAq0W+/TY8COIOBwbccDxBAA6CIiAIiIAnJ5/Z1DJtvpIFa4qErQQ8W/E7DzVBBPSSBsxxnWT5vzyy99vva1cHGkhNKht2aCk4uPaOJ7CBwgGvDuzPUqM1Sq5LPUbazMfl1T3WTG1kayAZOsjWTG1kayAZOsjWTG1kayAZOsjWTG1kayAdBmVc6GUbY8Ki1qbH8pZf3KJMs+fbS61Va1q44aFakxPqhhpeE+gpz9ZGpJ+i3p3w0IiJULIiIgEecq17stbUH7ztVf2aYwUHqLMf0zhtZM/PTKGvv7lgQVp6NBfybX/cWmn1k62GO2CRz8ruTZk6yNZMbWRrJKRmTrI1kxtZGsgGTrI1kxtZGsgGTrJkZKytVsq6Xdv8AfXY6cKtP8SN7th4EDomu1kayAfS+RcqUruhSuaLaSVFDDpB3FT0EEEHrE2MhLkgzh1Fw1g7fwq+L0uhaqjnKOgMox7VHTJtgCIiAcryj5YNnk+5qKcKjrqqfTpVObiOsLpN+WfOtM6ICjgJJnLplbSqWlmp2KGrOOtuYneAH/VIr1kAydONOY2sjWQDJ0405jayNZAMnTjTmNrI1kAydONOY2sjWQC9cHFWHV/bbPoTIN3rra2q8XpUmPaUGPjjPnXWSbOTC71mT6Kk4mm1VD3MWA/S6ypq4/wAEyxp3/Jo62Iic8uCYmVb1bejWrtuRHft0VJA7zgO+Zc4flZyhq7NaIPOr1EU9OinOY+8IO+b447pqJpN1FsiWnUYgsxxLFmY9LMcSfGVacxtZGsnYOcZOnGnMbWRrIBk6cacxtZGsgGTpxpzG1kayAZOnGnMbWRrIBlCuyFHRitRGV0Yb1ZTpKRj1ifTubeV0vbahdJhhUQEgfhYbHXuYMO6fLGsksch2XcDcZPdt/wDGpY9y1FH7CB7RgEyREQD5t5Vra6p5Qr1LmmVWoQaLA4q1JQFXA+cNmkvAnoIJ4zWT6uzhyDb39Fre5TSU7VI2MjcHRuDDHv2g4g4SAc7OTa+sWLJTa5oY7KlNSSB66DEqevaOuAcfrI1kveSLr0av8N/pHki69Gr/AA3+kAs6yNZL3ki69Gr/AA3+keSLr0av8N/pALOsjWS95IuvRq/w3+keSLr0av8ADf6QCzrI1kveSLr0av8ADf6R5IuvRq/w3+kAs6ySvyMXeNO7o+a6OPzAqf8AASL/ACRdejV/hv8ASdtyV622un11OpTpvSYFmRlXSVlYbSMN2l75FnjuxskxOpImWJieU6H9VPfPDlWh/UXxnK2y+C/aMyQrytZT1l4tEHm0EC/mfnt+0oO6S2cr2426z3Bj8pAGV7e6uK9au1tcY1Hd8Cj7NIkgbuAwHdLelg9zk10V88lVI1WnGnL/AJIuvRq/w3+keSLr0av8N/pL5ULGnGnL/ki69Gr/AA3+keSLr0av8N/pALGnGnL/AJIuvRq/w3+keSLr0av8N/pALGnGnL/ki69Gr/Df6R5IuvRq/wAN/pALGnGnL/ki69Gr/Df6R5IuvRq/w3+kAsac3+Y9S5W+tXtab1aquCUXih5rgk7FGiSMTsGMyc2+T7KF8wwovQpYjSrVVKqBx0VO1z2bOkiT7mnmpbZMpauguLthrKrYadQjpPADbgo2DtxJA6CJ7EA//9k=",
});

const task = createTask({
  id: "1",
  title: "Task 1",
  asignee: [user1],
  startDate: createRandomDate(),
  endDate: createRandomDate(),
  priority: "Low",
  status: "Too late",
  sectionId: "1",
});

const task2 = createTask({
  id: "2",
  title: "Task 2",
  asignee: [user1, user2],
  startDate: createRandomDate(),
  endDate: createRandomDate(),
  priority: "Medium",
  sectionId: "1",
});

const task3 = createTask({
  id: "3",
  title: "Task 3",
  startDate: createRandomDate(),
  endDate: createRandomDate(),
  status: "Done",
  sectionId: "3",
  state: "completed",
});

const task4 = createTask({
  id: "4",
  title: "Task 4",
  startDate: createRandomDate(),
  endDate: createRandomDate(),
  priority: "High",
  sectionId: "1",
});

const section = createSection({
  id: "1",
  title: "To Do",
  position: 0,
  taskIds: ["1", "2", "4"],
});
const section2 = createSection({ id: "2", title: "In progress", position: 1 });
const section3 = createSection({
  id: "3",
  title: "Done",
  position: 2,
  taskIds: ["3"],
});

export interface ThemePropTypes {
  main: string;
  font: string;
  fontSecondary: string;
  lightBg: string;
  darkBg: string;
  border: string;
  shadow: string;
  accents: {
    pink: string;
    violetBlue: string;
    green: string;
    orange: string;
    brown: string;
  };
}

const theme: { [key: string]: ThemePropTypes } = {
  light: {
    main: "rgb(234, 247, 255)",
    font: "rgb(0, 68, 114)",
    fontSecondary: "rgb(0, 41, 68)",
    lightBg: "rgb(191, 228, 252)",
    darkBg: "rgb(153, 214, 255)",
    border: "rgb(101, 191, 252)",
    shadow: "#dff2ff",
    accents: {
      pink: "rgb(224, 141, 172)",
      violetBlue: "rgb(106, 127, 219)",
      green: "rgb(69, 203, 133)",
      orange: "rgb(224, 159, 125)",
      brown: "rgb(193, 143, 92)",
    },
  },
  dark: {
    main: "rgb(52, 51, 54)",
    font: "rgb(191, 228, 252)",
    fontSecondary: "rgb(227, 244, 255)",
    lightBg: "rgb(49, 89, 122)",
    darkBg: "rgb(28, 63, 92)",
    border: "rgb(60, 112, 158)",
    shadow: "rgb(77, 75, 80)",
    accents: {
      pink: "rgb(192, 53, 104)",
      violetBlue: "rgb(48, 75, 197)",
      green: "rgb(45, 159, 100)",
      orange: "rgb(197, 100, 48)",
      brown: "rgb(122, 84, 46)",
    },
  },
};

function App() {
  const [allTasks, setAllTasks] = React.useState([task, task2, task3, task4]);
  const [allSections, setAllSections] = React.useState([
    section,
    section2,
    section3,
  ]);
  const prepareSections = (sections: Section[], tasks: Task[]) => {
    return sections.map((section) =>
      section.taskIds
        ? {
            ...section,
            jo: "elo",
            tasks: tasks.filter((t: Task) => section.taskIds!.includes(t.id)),
          }
        : section
    );
  };
  const [preparedSections, setPreparedSections] = React.useState(
    prepareSections(allSections, allTasks)
  );

  const [dragTaskId, setDragTaskId] = React.useState<string | undefined>(
    undefined
  );
  const [dropSectionId, setDropSectionId] = React.useState<string | undefined>(
    undefined
  );

  const onTaskDragStart = (taskId: string) => {
    setDragTaskId(taskId);
  };

  const onSectionTileDragOver = (sectionId: string) => {
    setDropSectionId(sectionId);
  };

  const onTaskDrop = () => {
    if (!dropSectionId) return;
    if (!dragTaskId) {
      setDropSectionId(undefined);
      return;
    }
    const task = allTasks.find((t) => t.id === dragTaskId);
    if (!task) return;
    if (task.sectionId === dropSectionId) return;

    const updatedTasks = allTasks.map((task) =>
      task.id === dragTaskId
        ? {
            ...task,
            sectionId: dropSectionId,
          }
        : task
    );

    const updatedSections = allSections.map((section) => {
      if (section.id === task.sectionId) {
        // REMOVE TASK FROM SECTION TASK IDS
        return {
          ...section,
          taskIds:
            section.taskIds &&
            section.taskIds.filter(
              (sectionTaskId) => sectionTaskId !== dragTaskId
            ),
          tasks: section,
        };
      } else if (section.id === dropSectionId) {
        // ADD TASK TO SECTION TASK IDS
        return {
          ...section,
          taskIds: section.taskIds
            ? [...section.taskIds, dragTaskId]
            : [dragTaskId],
        };
      } else {
        return section;
      }
    });

    setDragTaskId(undefined);
    setDropSectionId(undefined);
    setAllSections(updatedSections);
    setAllTasks(updatedTasks);
  };

  React.useEffect(() => {
    setPreparedSections(prepareSections(allSections, allTasks));
  }, [allSections, allTasks]);

  const [userTheme, setUserTheme] = React.useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme[userTheme]}>
      <Wrapper test-id="AppWrapper">
        <ThemeChanger
          onClick={() => setUserTheme(userTheme === "dark" ? "light" : "dark")}
        >{`Change Theme to ${
          userTheme === "dark" ? "Light" : "Dark"
        }`}</ThemeChanger>
        <Board
          sections={preparedSections}
          onTaskDrop={onTaskDrop}
          onTaskDragStart={onTaskDragStart}
          onSectionTileDragOver={onSectionTileDragOver}
          dropSectionId={dropSectionId}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
