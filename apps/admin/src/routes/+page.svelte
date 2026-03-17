<script lang="ts">
  import { Button, Card, Input, Label } from "@jeevatix/ui";
</script>

<div class="h-screen w-full flex items-center justify-center bg-muted/30">
  <div class="w-full max-w-md">
    <Card.Root>
      <Card.Header class="space-y-1">
        <Card.Title class="text-2xl font-bold tracking-tight">Admin Jeevatix</Card.Title>
        <Card.Description>
          Masukkan kredensial Anda untuk masuk ke dashboard utama.
        </Card.Description>
      </Card.Header>
      <Card.Content class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="admin@jeevatix.com" />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="#" class="ml-auto inline-block text-sm underline text-muted-foreground">
              Lupa password?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>
        <Button class="w-full" type="submit">Masuk</Button>
      </Card.Content>
      <Card.Footer>
        <p class="text-xs text-center text-muted-foreground w-full">
          Sistem Portal Internal &copy; 2026 Jeevatix
        </p>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
