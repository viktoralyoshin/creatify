import {
  Card,
  CardHeader,
  CardBody,
  Image,
  User,
  Link,
  CardFooter,
  Button,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { HeartIcon, MessageCircleMoreIcon } from "lucide-react";
import { React, useState } from "react";

export default function PostCard() {
  const [isLiked, setLiked] = useState(false);

  const changeLiked = () => {
    if (isLiked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-0 pt-4 px-4 flex-col items-start gap-2">
        <div className="flex justify-between w-full">
          <User
            className="font-semibold cursor-pointer"
            name="Viktor"
            description={
              <Link href="#" size="sm" className="text-[12px]">
                @1rowvy
              </Link>
            }
          />
          <Tooltip content="Бесплатный контент">
            <Chip
              color="success"
              size="lg"
              className="font-semibold text-white cursor-default"
            >
              ₽
            </Chip>
          </Tooltip>
        </div>
        <h1 className="font-semibold text-[18px]">Макет сайта YourBank</h1>
      </CardHeader>
      <CardBody className="overflow-visible py-4">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="1.jpg"
        />
      </CardBody>
      <CardFooter className="flex gap-2 items-center">
        <Button
          color={isLiked ? "danger" : "default"}
          variant="light"
          onClick={changeLiked}
          radius="full"
        >
          {isLiked ? (
            <div className="flex gap-1 items-center">
              <HeartIcon size={18} fill="#f21260" />
              <p className="font-medium text-[14px]">18</p>
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <HeartIcon size={18} />
              <p className="font-medium text-[14px]">18</p>
            </div>
          )}
        </Button>
        <Button color="default" variant="light" radius="full">
          <div className="flex gap-1 items-center">
            <MessageCircleMoreIcon size={18} />
            <p className="font-medium text-[14px]">4</p>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
