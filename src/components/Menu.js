import { useStore } from "../hooks/useStore";
import { MenuBtn, MenuCon } from "./MenuStyles";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <MenuCon>
      <MenuBtn onClick={() => saveWorld()}>Save</MenuBtn>
      <MenuBtn onClick={() => resetWorld()}>Reset</MenuBtn>
    </MenuCon>
  );
};
