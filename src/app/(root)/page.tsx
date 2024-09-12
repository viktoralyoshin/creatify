"use client";

import PostCard from "@/components/ui/PostCard";
import { Tab, Tabs, Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" className="font-semibold">
        <Tab key="follow" title="Подписки">
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </div>
        </Tab>
        <Tab key="popular" title="Популярное">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="recent" title="Недавнее">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
