import { useContext, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ResponseRo, UserAuthRo } from "@/lib/types"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authLogin } from "@/api/auth";
import { AuthContext } from "@/context"
import { toast } from "react-toastify";

export function LoginPage() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const submit = async () => {
    try {
      // Call your API here
      const response: ResponseRo<UserAuthRo[]> = await authLogin({
        email,
        password,
      });
      setUser(response.data[0]);
      navigate('/')
    } catch (error) {
      toast('Invalid email or password', { type: 'error' })
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
            Enter your email below to login to your account.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={() => submit()} className="w-full">Sign in</Button>
        </CardFooter>
        </Card>
    </div>

  )
}
