-- AddForeignKey
ALTER TABLE "testsubmissions" ADD CONSTRAINT "testsubmissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
