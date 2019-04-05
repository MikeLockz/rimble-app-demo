import React from "react";
import { Box, Flex, Button, Heading, Text } from "rimble-ui";
import NetworkIndicator from "../utilities/components/NetworkIndicator";
import AccountOverview from "../utilities/components/AccountOverview";

class Header extends React.Component {
  render() {
    return (
      <Box>
        <Flex alignItems={"center"} justifyContent="flex-end" bg={"white"}>
          <Box mr={4}>
            <Flex>
              <Flex flexDirection={"column"} mr={4}>
                <Text>Network Indicator with 2 props</Text>
                <NetworkIndicator
                  currentNetwork={this.props.network.current.id}
                  requiredNetwork={4}
                />
              </Flex>
              <Flex flexDirection={"column"}>
                <Text>Network Indicator with 1 prop</Text>
                <NetworkIndicator
                  currentNetwork={this.props.network.current.id}
                />
              </Flex>
            </Flex>
          </Box>

          {this.props.account && this.props.accountValidated ? (
            <AccountOverview
              account={this.props.account}
              accountBalanceLow={this.props.accountBalanceLow}
              accountBalance={this.props.accountBalance}
            />
          ) : (
            <Button
              m={3}
              onClick={this.props.connectAndValidateAccount}
              size="small"
              backgroundColor={"white"}
            >
              Connect
            </Button>
          )}
        </Flex>
        <Box bg="primary" p={3} justifyContent="center" flexDirection="column">
          <Box width="400px" mx="auto">
            <Heading.h2 color={"white"}>Rimble App Demo</Heading.h2>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Header;
