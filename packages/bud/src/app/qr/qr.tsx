"use client";

import { Box, Flex, Input, Switch } from "@chakra-ui/react";
import styled from "@emotion/styled";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

const StyledContainer = styled(Flex)`
  canvas {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const QR = () => {
  const ref = useRef(null as any);
  const [link, setLink] = useState("https://budcor.com/");
  const [logoUrl, setLogoUrl] = useState("https://admiralbud.com/images/logo.svg");
  const [size, setSize] = useState(1600);
  const [qrSize, setQrSize] = useState(1600);
  const [withLogo, setWithLogo] = useState(false);
  const changeSize = (newSize: number) => {
    if (typeof newSize === "number") {
      setSize(newSize || 0);
      setQrSize(newSize > 30 ? newSize : 30);
    }
  };
  useEffect(() => {
    const qrCode = new QRCodeStyling({
      data: link,
      width: qrSize,
      height: qrSize,
      image: withLogo ? logoUrl : undefined,
      dotsOptions: {
        color: "#000",
        type: "square",
        // type: "rounded",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 0,
      },
    });
    if (ref.current?.innerHTML) {
      ref.current.innerHTML = "";
    }
    qrCode.append(ref.current);
  }, [link, withLogo, qrSize, logoUrl]);

  return (
    <StyledContainer
      flexDirection="column"
      justifyContent="flex-start"
      px={5}
      py={10}
      maxWidth="800px"
      mx="auto"
    >
      <Input
        placeholder="Link"
        value={link}
        onChange={(data) => setLink(data?.target?.value)}
        mb={4}
      />
      <Input
        placeholder="Size"
        value={size}
        onChange={(data) => changeSize(parseInt(data?.target?.value, 10))}
        mb={4}
      />
      <Flex>
        <Switch
          placeholder="test"
          mb={4}
          onChange={(data) => setWithLogo(data?.target?.checked)}
          checked={withLogo}
        >
          With Logo
        </Switch>
      </Flex>
      {withLogo ? (
        <Input
          placeholder="Logo URL"
          value={logoUrl}
          onChange={(data) => setLogoUrl(data?.target?.value)}
          mb={4}
        />
      ) : null}
      <Box id="test" ref={ref} />
    </StyledContainer>
  );
};

export default QR;
