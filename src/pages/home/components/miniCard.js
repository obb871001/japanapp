import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const MiniCard = ({ imageSrc, viewTitle, content = [] }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageSrc}
          className="w-full h-[150px] object-cover"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">{viewTitle}</Heading>
          <List className="!text-sm" spacing={2}>
            {content.map((item) => {
              return (
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item.label}：
                  {item.link ? (
                    <Link color="teal.500" href={item.link}>
                      {item.value}
                    </Link>
                  ) : (
                    item.value
                  )}
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </CardBody>
      {/* <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};

export default MiniCard;
