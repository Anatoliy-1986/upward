
import styled from "styled-components";

type TFlexBLock = {
  background?: string;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  position?: string;
  padding?: string;
  margin?: string;
  width?: string;
};

export const Container = styled.div<TFlexBLock>`
  background: ${({ background }) => background || "#ffffff;"};
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div<TFlexBLock>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ wrap }) => wrap || "no-wrap"};
  margin: 0 auto;
  position: ${({ position }) => position || "static"};
  box-sizing: border-box;
  max-width: ${({ width }) => width || "1340px"};
  padding: ${({ padding }) => padding || "0"};
`;

export const ViewBlock = styled.div<TFlexBLock>`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  position: relative;
  box-sizing: border-box;
  margin: ${({ margin }) => margin || "0"};
`;

export const ButtonGeneral = styled.button<TFlexBLock>`
  width: 123px;
  height: 39px;
  font-weight: bold;
  font-size: 14px;
  line-height: 29px;
  letter-spacing: 0.24px;
  color: #202020;
  background: #b8a4fd;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
