
DROP POLICY "anyone can insert messages" ON public.contact_messages;

CREATE POLICY "anyone can submit a valid message"
ON public.contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 120
  AND length(trim(email)) BETWEEN 3 AND 200
  AND email LIKE '%_@_%.__%'
  AND length(trim(message)) BETWEEN 1 AND 5000
  AND read = false
);
