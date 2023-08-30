"use client"

import {useForm, SubmitHandler, FieldValues} from "react-hook-form";
import axios from "axios";
import { Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "./ui/use-toast";
import { useState } from "react";


const ContactForm = () => {

  const {register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: ""
    }
  });

  console.log(formState.errors);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {toast} = useToast();
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/api/send", data);
      reset();
      setIsLoading(false);
      toast({
        title: "Message sent",
        description: "Thanks for contacting me",
      });
    } catch (error) {
      toast({
        title: "Error sending the message",
        description: "Try later",
        variant: "destructive"
      });
      setIsLoading(false);
    };
  };

  return (
    <div className="h-[calc(100vh-250px)] mb-[120px] w-full flex justify-center items-center">
      <Card className="w-[90%] sm:w-96">
        <CardHeader>
          <CardTitle>
            <p className="text-3xl font-semibold text-center">Contact Me</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form 
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
            id="formContact"
          >
            <div className="flex flex-col gap-y-1">
              <Input
                type="name"
                placeholder="Juan"
                {...register("name", {required: {value: true, message: "The name is required"}})}
              />
              { formState.errors.name && <p className="text-sm text-destructive font-light">{formState.errors.name.message}</p> }
            </div>

            <div className="flex flex-col gap-y-1">
              <Input
                type="email"
                placeholder="example@gmail.com"
                {...register("email", {required: {value: true, message: "The email is required"}})}
              />
              { formState.errors.email && <p className="text-sm text-destructive font-light">{formState.errors.email.message}</p> }
            </div>

            <Textarea
              placeholder="Message"
              {...register("message")}
            />
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            variant="default"
            form="formContact"
            disabled={isLoading}
          >
            {
              isLoading
              ? <Loader2 className='animate-spin'/>
              : "Send"
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;