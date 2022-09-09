import { Button } from "@mantine/core";
import { shortenAddress } from "../utils/shortenAddress";

const ConnectButton = ({
  connectWallet,
  connectedAccount,
}: {
  connectWallet: any;
  connectedAccount: any;
}) => {
  return !connectedAccount ? (
    <Button radius="xl" onClick={connectWallet}>
      Connect
    </Button>
  ) : (
    <Button radius="xl">{shortenAddress(connectedAccount)}</Button>
  );
};

export default ConnectButton;
